//
const without = function(srcArray, removeArray) {
  srcArray.forEach(function(srcItem, index) {
    removeArray.forEach(function(itemToRemove) {
      if (srcItem === itemToRemove) {
        srcArray.splice(index, 1);
      }
    });
  });

  return srcArray;
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
    //use template string to output, however, template string cannot display array elements as console.log
    //it removes the brackets and quotation marks arround elements, so I don't use ${array1} to concatenate data.
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: Array removed `, array1, expected ? "equals" : "unequals", "expected ", array2);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Failed: Array removed `, array1, expected ? "equals" : "unequals", "expected ", array2);
  }
};
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"], true);

assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2"], true);
assertArraysEqual(without(["1", "2", "3"], ["3", "1"]), ["2"], true);
