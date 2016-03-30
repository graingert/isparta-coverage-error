const B = require('../src/B');

describe('B', function() {
  describe('.c()', function() {
    it('should return undefined', function() {
      const result = B.c();
      if (typeof result !== 'undefined') {
        throw new Error('Whoops');
      }
    });
  });
});
