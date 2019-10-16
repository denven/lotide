//Given an array with other arrays inside, it can flatten it into a single-level array.
const flatten = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let insertIndex = i;
      let subArrayLen = array[i].length;
      array[i].forEach(function(subArrElem) {
        //expand the original array
        array.splice(insertIndex++, 0, subArrElem);
      });
      //console.log(array);
      array.splice(insertIndex, 1);
      i += subArrayLen;
    }
  }
  return array;
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

//console.log(flatten([1, 2, 3, [4, 5, 6]]));

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
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);
assertArraysEqual(flatten([1, 2, 3, [4, 5, 6]]), [1, 2, 3, 4, 5, 6], true);
