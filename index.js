// const head   = require('./head');
// const tail   = require('./tail');
// const middle = require('./middle');

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle
// };


const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require('./head');
const letterPostions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const withOut = require('./without');










module.exports = {
    assertArraysEqual,
    assertEqual,
    assertObjectsEqual,
    countLetters,
    countOnly,
    eqArrays,
    eqObjects,
    findKey,
    findKeyByValue,
    head,
    letterPostions,
    map,
    middle,
    tail,
    takeUntil,
    withOut
};