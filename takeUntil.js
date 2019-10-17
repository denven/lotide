//The function will return a "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

assertArraysEqual(results1, [1 ,2, 5, 7, 2], true);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);


