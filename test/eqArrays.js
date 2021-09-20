const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


describe("#eqArrays", () => {
    it("returns true [1, 2, 3] for [1, 2, 3]", () => {
      assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });
    it("should return a boolean", () => {
        assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });
  });

  module.exports = eqArrays;
