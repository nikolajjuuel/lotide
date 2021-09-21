# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nikolajjuuel/lotide`

**Require it:**

`const _ = require('@nikolajjuuel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(): returns true if 2 arrays are equal;
* assertEqual: returns true if string or numbers are equal;
* assertObjectsEqual: returns true if 2 objects are the equal;
* countLetters: creates an object that keep track of what letters are in a string and how many instances of each letter;
* countOnly: takes an array and counts how many how many of each string item or number item;
* eqArrays: checks to see if 2 arrays ar eeual to each other;
* eqObjects: checks to see if 2 objects are equal;
* findKey: by inserting a number value you can determine what key is assciated with it in an object;
* findKeyByValue: by inserting a string value you can determine what the key value is;
* head: is first item in an array;
* letterPostions: returns an object with the values of where the letter appears in a string;
* map: returns a new array based on results of the callback function;
* middle: returns the middle item of an array. [1, 2, 3,] => [2] / [1, 2, 3, 4,] => [2, 3];
* tail: returns all elements of the array except for the first element;
* takeUntil: returns a shorter array depending on what the end condition is set to;
* withOut: remove elemnts from array