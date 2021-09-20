const assertArraysEqual = require('./assertArraysEqual');

function tail(arr) {
    return arr.slice(1)
}
//console.log(tail([1,2,3]));
assertArraysEqual(tail([1,2,3]),[2,3])