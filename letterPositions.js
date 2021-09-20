const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (string) {
  const results = {};
  string = string.split(' ').join('');
  let index = -1;

  for (const letter of string) {

      index++
      // console.log('stingindex:', string[index], index);
      if (results[letter]) {
          results[letter].push(index);
      }

      else {
          results[letter] = [index];

      }
  }

  return results;
}



const lhl = letterPositions("lighthouse labs");
console.log(lhl);

assertArraysEqual(letterPositions("hello").e, [1]);


module.exports = letterPositions;