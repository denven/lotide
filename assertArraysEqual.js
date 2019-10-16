const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (var i=0; i < array1.length; i++) {
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
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequals");
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F625)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequal");
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);
