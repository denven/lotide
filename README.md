# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This	 project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @denven/lotide`

**Require it:**

`const _ = require('@denven/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: get the first element in an array.
* `tail(...)`: return an array which containing all the elements of the array except the 1st one.
* `middle(...)`: return an array containing the middle element(s) of the input array. if the array length is less than 3, return [], otherwise return the middle 1(odd length) or 2(even) elements of the array.
* without(...): take the elements(an array, the 2nd parameter) out of the input array and then return the new array.
* `eqArrays(...)`: compare two arrays.
* `eqObjects(...)`: compare two objects containing the identical key-value pairs. Note: nested objects comparision is not implemented.
* `map(...)`: return a new array based on the results of the callback function(2nd parameter) which operating the input array(1st parameter).
* `countOnly(...)`: takes two parameters and return the count number of the elements searching for: 1st: an array of strings to look through; 2nd: an object specifying what to count in the array.
* `countLetters(...)`: count letters which appear from the input string, and return an objects which display the count of each letter appears in the string. we do not counting spaces right now.
* `flatten(...)`: flatten the input array into a single level array.
* `findKey(...)`: this function takes in an object and a callback as parameters, it scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: Find the key of an object(1st parameter) by the key value(2nd parameter).
* `letterPosition(...)`: return an object which contains keys to indictate the postions of each letter of the input string.
* `takeUntil(...)`: return a "slice of the input array(1st parameter) with elements taken from the beginning." It should keep going until the callback(2nd parameter)/predicate returns a truthy value.





















