const
  chai = require('chai'),
  yopt = require('../src/core');


describe('core', () => {
  it('can compile', () => {
    let
      result = yopt.compile('красноглазое.чмо()');

    chai.assert.equal(result, 'console.log()');
  });
});
