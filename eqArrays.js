const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;