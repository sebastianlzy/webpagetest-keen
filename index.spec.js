var expect = require('chai').expect;
var webpagetestKeen = require('./index');

describe('isNecessaryApiKeysProvided()', function() {
    it('should provide all the necessary keys', function() {
        let program = {
            webPageTestKey: 'key',
            keenProjectId: 'id',
            keenWriteKey: 'key'
        }
        expect((webpagetestKeen.isNecessaryApiKeysProvided(program, 'www.gateway.com')())).to.be.true;
    });
    it('should throw an error if url is missing', function() {
        let program = {
            url: '',
            webPageTestKey: 'key',
            keenProjectId: 'id',
            keenWriteKey: 'key'
        }

        expect((webpagetestKeen.isNecessaryApiKeysProvided(program))).to.throw();
    });
});
