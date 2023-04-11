const assert = require('chai').assert;
const expect = require('chai').expect;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]])", () => {
    expect(tail([1, 2, 3])).to.eql([2, 3]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(['Hello', 'Lighthouse', 'Labs'])).to.eql(['Lighthouse', 'Labs']); 
  });
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]); 
  });
});