const assertArraysEqual = require('./assertArraysEqual.js')
const eqArrays = require('./eqArrays.js')

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

module.exports =  middle;

