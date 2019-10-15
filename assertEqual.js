const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log(String.fromCodePoint(0x1F44d) + " Assertion Passed: [" + actual + "] === [" + expected + "]");
    //use template string to output
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [actual] === [expected]`);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F625)} Assertion Failed: [actual] !== [expected]`);
  }
};


//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Thanksgiving Day", "Thanksgiving Day");
assertEqual(1, 2);

//different types arguments outputs wrong result.
assertEqual("1", 1);
