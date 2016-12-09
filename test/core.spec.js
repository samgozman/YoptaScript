const
  chai = require('chai'),
  yopt = require('../src/core');


describe('core', () => {
  it('can compile to js', () => {
    let
      result = yopt.compile('красноглазое.чмо()');

    chai.assert.equal(result, 'console.log()');
  });
  it('can decompile from js', () => {
    let
      result = yopt.yoptify('console.log()');

    chai.assert.equal(result, 'красноглазое.чмо()');
  });
});
