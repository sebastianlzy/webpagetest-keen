var expect = require('chai').expect;
var webpagetestKeen = require('./index');
var set = require('lodash/set');
var sampleResult = require('./test/sampleResult.json');

describe('isNecessaryApiKeysProvided()', function() {
    const program = {
        url: 'url',
        webPageTestKey: 'key',
        keenProjectId: 'id',
        keenWriteKey: 'key'
    }

    it('should provide all the necessary keys', function() {
        expect((webpagetestKeen.isNecessaryApiKeysProvided(program, 'www.gateway.com')())).to.be.true;
    });


    Object.keys(program).forEach((key) => {
        it(`should throw an error if ${key} is missing`, function() {
            const newProgram = set(program, key, '');
            expect((webpagetestKeen.isNecessaryApiKeysProvided(newProgram, newProgram.url))).to.throw();
        });
    });

});

describe('pickTrackingInfo()', function() {
    it('should pick keys that are defined in the pageTestKeys for firstView & repeatedView only', () => {
        const data = {median: sampleResult};
        const url = 'www.shopback.sg'
        expect(webpagetestKeen.pickTrackingInfo({data}, url)).to.deep.equal(sampleResult);
    });
});
