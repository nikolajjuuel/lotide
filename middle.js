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



function middle(array) {
  if (array.length < 3) {
    return [];
  }

  let middleArray = [];
  let bangArray = 0;

  for (let i = 0; i < array.length; i++) {
    const add = i + 1;
    bangArray += add
  }
  let midPoint = bangArray / array.length;

  if (midPoint % 1 === 0) {
    middleArray.push(array[midPoint - 1])
  } else {
    middleArray.push(array[midPoint - 1.5])
    middleArray.push(array[midPoint - 0.5])
  }

  console.log(middleArray);
  return (middleArray);
}

eqArrays(middle([1,2,3]),[2])

eqArrays(middle([1,2,3,4,5]),[3])
assertArraysEqual(middle([1,2,3,4,5],[3]),[3])
assertArraysEqual(middle([1,2,3,4]),[2,3])
assertArraysEqual(middle([121,246,323,1234,1]),[323])

