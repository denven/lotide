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
    //this code will make the function always return true
    //as there is a function in forEach, the return statement will not 
    //return to the eqArray function.
    //array1.forEach(function(item, index) {
    //    console.log(typeof item, typeof array2[index]);
    //    if (item !== array2[index]) { return false; }
    //});
    for (var i = 0; i < array1.length; i++) {
        if(array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }

  return true;
};

assertEqual(eqArrays(["12", "2", "3"], ["12", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 5]), false); // => true
