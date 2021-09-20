const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    const keys1 = Object.keys(actual).sort().join('');
    const keys2 = Object.keys(expected).sort().join('');
    const values1 = Object.values(actual).sort().join('');
    const values2 = Object.values(expected).sort().join('');


    if (keys1 === keys2 && values1 === values2) {
        console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
        console.log(`Example label: ${inspect(actual)}`);

        return true
    } else {
        console.log(`🤯🔥🔥  Assertion Failed: ${actual} !== ${expected}`);
        return false
    }


};


const eqObjects = function(object1, object2) {  
    const keys1 = Object.keys(object1).sort().join('');
    const keys2 = Object.keys(object2).sort().join('');
    const values1 = Object.values(object1).sort().join('');
    const values2 = Object.values(object2).sort().join('');
      if (keys1 === keys2 && values1 === values2){
        return true
    } else {
    return false
    }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const abc = { a: "1", b: "2", c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(ab,ba), true);

assertObjectsEqual(eqObjects(ab, ba),true);

assertObjectsEqual(eqObjects(cd, dc),true);

module.exports =  eqObjects;