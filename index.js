const WebPageTest = require('webpagetest');
const util = require('util')
const _keen = require('keen-js');
const get = require('lodash/get');
const pick = require('lodash/pick');
const program = require('commander');

const pageTestKeys = require('./pageTestKeys').index();

program
    .version('0.0.1')
    .option('-u, --url [url]', 'Add url')
    .option('-w, --web-page-test-key [webPageTestKey]', 'Add web page test key')
    .option('-p, --keen-project-id [keenProjectId]', 'Add Keen project id')
    .option('-k, --keen-write-key [keenWriteKey]', 'Add Keen write keey')
    .parse(process.argv);

const url = program.url;
const wpt = new WebPageTest('www.webpagetest.org', program.webPageTestKey);
const keen = new _keen({
    projectId: program.keenProjectId,
    writeKey: program.keenWriteKey
});

const wptOptions = {location: 'ec2-ap-southeast-1', pollResults: 30, timeout: 900}

const pickTrackingInfo = (data) => {
    let firstView = pick(get(data, 'data.median.firstView'), pageTestKeys);
    let repeatView = pick(get(data, 'data.median.repeatView'), pageTestKeys);

    return {url, firstView, repeatView}
}

console.log('Please wait... sending for test - ', url)
wpt.runTest(url, wptOptions, function(err, data) {
    if (data) {
        console.log('Test completed... sending data to Keen')
        keen.addEvent("webpagetest", pickTrackingInfo(data), function(err, res){
            if(res) {
                console.log('Sent.')
                return;
            }
        });
        return;
    }
    console.log('Oops! An error has occurred - ', err);
});