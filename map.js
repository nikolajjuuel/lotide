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




  const words = ["ground", "control", "to", "major", "tom"];
  const newWords = ['rice', 'apple', 'carrot', 'eggplant', 'caramel', 'apricots', 'raspberries']

  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
  }

  const results1 = map(words, word => word[0]);
  console.log(results1);
  assertArraysEqual(results1, ["g", "c", "t", "m", "t"])
  assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])
  assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"])
  assertArraysEqual(map(newWords, word => word[0]), ["r", "a", "c", "e", "c", "a", "r"])

