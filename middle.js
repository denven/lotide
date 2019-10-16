const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    let midIndex = Math.ceil(array.length / 2) - 1;
    if (array.length % 2) {
      return [array[midIndex]];
    } else {
      return [array[midIndex], array[midIndex + 1]];
    }
  }
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
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: middle array`, array1, expected ? "equals" : "unequals", array2);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F625)}  Assertion Failed: middle array`, array1, expected ? "equals" : "unequals", array2);
  }
};

assertArraysEqual(middle(["1", "2", "3"]), ["2"], true);
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"], true);
assertArraysEqual(middle(["1", "2", 3, "4"]), ["2", 3], true);
assertArraysEqual(middle(["1", "2", 3, "4"]), [2, 3], false);
