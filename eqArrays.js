const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(String.fromCodePoint(0x1F44d) + " Assertion Passed: [" + actual + "] === [" + expected + "]");
    //use template string to output
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    array1.forEach(function(item, index) {
      if (item !== array2[index]) return false;
    });
  } else {
    return false;
  }

  return true;
};


//test code
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

//assertEqual("Thanksgiving Day", "Thanksgiving Day");
//assertEqual(1, 2);

//different types arguments outputs wrong result.
//assertEqual("1", 1);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
