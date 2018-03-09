const expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
    //   assert.equal([1,2,3].indexOf(4), -1);
      expect([1,2,3].indexOf(4)).to.be.equal(-1);
    });
  });
});