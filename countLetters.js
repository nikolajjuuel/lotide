const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
        console.log(`🤯🔥🔥  Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countLetters = function (string) {
    const results = {};
    string = string.split(' ').join('');

    for (const letter of string) {
        if (results[letter]) {
            results[letter] += 1;
        }
        else {
            results[letter] = 1;
        }
    }

    return results;
}



const lhl = countLetters("lighthouse in the house");

assertEqual(lhl["e"], 3);
assertEqual(lhl["g"], 1);
assertEqual(lhl[" "], undefined);
