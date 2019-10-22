const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2, expected) {
  let actual = eqArrays(array1, array2);
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: `, array1, expected ? "equals" : "unequals", array2);
    return true;
  } else {
    console.log(`${String.fromCodePoint(0x1F625)}  Assertion Passed: `, array1, expected ? "equals" : "unequals", array2);
    return false;
  }
};

module.exports = assertArraysEqual;
