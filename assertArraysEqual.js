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
  assertArraysEqual([1,2],[1,2]);