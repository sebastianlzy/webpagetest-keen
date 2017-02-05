const WebPageTest = require('webpagetest');
const util = require('util')
const _keen = require('keen-js');
const get = require('lodash/get');
const isEmpty = require('lodash/isEmpty');
const pick = require('lodash/pick');
const program = require('commander');

const pageTestKeys = require('./pageTestKeys').index();

program
    .version('0.0.1')
    .option('-u, --url <url>', 'Add the url to be tested')
    .option('-w, --web-page-test-key <webPageTestKey>', 'Add web page test key')
    .option('-p, --keen-project-id <keenProjectId>', 'Add Keen project id')
    .option('-k, --keen-write-key <keenWriteKey>', 'Add Keen write keey')
    .option('-l, --web-page-test-location <webPageTestLocation>', 'Specify webpagetest server location <webPageTestLocation>', 'ec2-ap-southeast-1')
    .parse(process.argv);

const pickTrackingInfo = (data, url) => {
    let firstView = pick(get(data, 'data.median.firstView'), pageTestKeys);
    let repeatView = pick(get(data, 'data.median.repeatView'), pageTestKeys);

    return {url, firstView, repeatView}
}

const isNecessaryApiKeysProvided = (program, url) => () => {

    if(isEmpty(url)) {
        throw {msg: 'Url is not defined'}
    }
    if(isEmpty(program.webPageTestKey)) {
        throw {msg: 'Web Page Test Key is not defined'}
    }
    if(isEmpty(program.keenProjectId)) {
        throw {msg: 'Keen project id is not defined'}
    }
    if(isEmpty(program.keenWriteKey)) {
        throw {msg: 'Keen write key is not defined'}
    }
    console.info('Please wait... sending for test - ', program.url)
    return true;
}

const runWebPageTest = (webPageTestKey, webPageTestLocation, url) => () => {
    
    const wpt = new WebPageTest('www.webpagetest.org', webPageTestKey);
    const wptOptions = {location: webPageTestLocation, pollResults: 30, timeout: 900}

    return new Promise((resolve, reject) => {
        return wpt.runTest(url, wptOptions, function(err, data) {
            if(data) {
                console.info('Test completed... sending data to Keen.io')
                resolve(data);
            }
            reject({msg: `Oops! An error has occurred when retrieving data from webpagetest -  ${err}`});
        });
    })

}

const sendDataToKeen = (keenProjectId, keenWriteKey, url) => (data) => {
    const keen = new _keen({
        projectId: keenProjectId,
        writeKey: keenWriteKey
    });

    return new Promise((resolve, reject) => {
        return keen.addEvent("webpagetest", pickTrackingInfo(data, url), function(err, res){
            if(res) {
                console.log('Data sent to Keen.io')
                resolve()
            }
            reject({msg: `Oops! An error prevented us from sending data to Keen.io - ${err}`});
        });
    })
}

module.exports.isNecessaryApiKeysProvided = isNecessaryApiKeysProvided

module.exports.default = () => {
    program.url = 'www.shopback.sg'

    Promise.resolve()
    .then(isNecessaryApiKeysProvided(program, program.url))
    .then(runWebPageTest(program.webPageTestKey, program.webPageTestLocation, program.url))
    .then(sendDataToKeen(program.keenProjectId, program.keenWriteKey, program.url))
    .catch((err) => {
        console.error(err.msg)
    })
}