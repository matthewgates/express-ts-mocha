var assert = require('assert');
var should = require('chai').should(); //actually call the function
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));

      var beverages = ['chai', 'matcha', 'oolong'];
      beverages.should.have.length(3);

      var foo = beverages[0];
      foo.should.be.a('string');
      foo.should.equal('chai');
      foo.should.have.length(4);
    });
  });
});