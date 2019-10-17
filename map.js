const words = ["ground", "control", "to", "major", "tom"];

// This function will take in two arguments:
//  An array to map
//  A callback function
// The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }

  return true;
};

const assertArraysEqual = function(array1, array2, expected) {
  let actual = eqArrays(array1, array2);
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequals");
  } else {
    console.log(`${String.fromCodePoint(0x1F625)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequal");
  }
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 'c'], true);
const newWords = ["This", "is", "the", "4th", "day", "of", "bootcamp"];
const results2 = map(newWords, word => word[0]);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 'c'], true);
