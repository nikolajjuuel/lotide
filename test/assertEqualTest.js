const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const assert = require('chai').assert;

//assertEqual(1,1)
  
//assertEqual(eqArrays(1, 1), true);

describe("#assertEqual", () => {
    it("returns true if 1 === 1]", () => {
      assert.equal(eqArrays(1,1), true);
    });
    it("should return boolean", () => {
        assert.isBoolean(eqArrays(1,1), true); 
      });
  });