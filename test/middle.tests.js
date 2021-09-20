const assertArraysEqual = require('../assertArraysEqual.js')
const eqArrays = require('../eqArrays.js')
const middle = require('../middle.js')
const assert = require('chai').assert;




//eqArrays(middle([1,2,3]),[2])
//eqArrays(middle([1,2,3,4,5]),[3])
//assertArraysEqual(middle([1,2,3,4,5],[3]),[3])
//assertArraysEqual(middle([1,2,3,4]),[2,3])
//assertArraysEqual(middle([121,246,323,1234,1]),[323])

describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.equal(middle([1,2,3]), 2);
    });
    it("should return an array", () => {
        assert.isArray(middle([1,2,3,4]), [2,3]);
    });
  });

