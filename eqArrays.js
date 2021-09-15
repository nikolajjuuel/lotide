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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);