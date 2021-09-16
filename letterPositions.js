const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arrayOne, arrayTwo) {
  let isTrue = true;
  for (let i = 0; i < arrayOne.length; i++) {
    const val1 = arrayOne[i];
    const val2 = arrayTwo[i];
    if (val1 === val2) {
      isTrue = true;
    }
    else {
      isTrue = false;
    }
  }

  console.log(isTrue);
  return isTrue;
}

function assertArraysEqual(arrayOne, arrayTwo) {
  let isTrue = "";
  for (let i = 0; i < arrayOne.length; i++) {
    const val1 = arrayOne[i];
    const val2 = arrayTwo[i];
    if (val1 === val2) {
      isTrue = `Assertion Passed: ${arrayOne} === ${arrayTwo}`;
    }
    else {
      isTrue = `Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
    }
  }

  console.log(isTrue);
  return isTrue;
}

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


