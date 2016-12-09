const
  chai = require('chai'),
  cases = require('./compile.cases'),
  yopt = require('../src/core');


describe('core', () => {
  it('can compile to js', () => cases.map(([js, ys]) => chai.assert.equal(yopt.compile(ys), js)));
  it('can decompile from js', () => cases.map(([js, ys]) => chai.assert.equal(yopt.yoptify(js), ys)));
});
