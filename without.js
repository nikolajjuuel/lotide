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

function without(array, values) {
    const result = [];

    for (const item in array) {
        let withOut = [];
        for (let i = 0; i < values.length; i++) {
            if (array[item] === values[i]) {
                withOut = array[item];
            }
        }
        if (array[item] !== withOut) {
            result.push(array[item]);
        }
    }

    console.log(result);

}

without([1, 2, 3], [1,2])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;