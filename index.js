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
    assertArraysEqual : assertArraysEqual,
    assertEqual : assertEqual,
    assertObjectsEqual : assertObjectsEqual,
    countLetters : countLetters,
    countOnly : countOnly,
    eqArrays : eqArrays,
    eqObjects : eqObjects,
    findKey : findKey,
    findKeyByValue : findKeyByValue,
    head  : head,
    letterPostions : letterPostions,
    map : map,
    middle : middle,
    tail : tail,
    takeUntil : takeUntil,
    withOut : withOut
};