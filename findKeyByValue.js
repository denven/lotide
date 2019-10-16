const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, keyValue) {
  //the first way is to use array.find() method
  //let key = Object.keys(obj).find(function(key) {
  //  return obj[key] === keyValue;
  //});
  //return key;

  //try another way
  for (const key of Object.keys(obj)) {
    if ((obj[key]) === keyValue) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = {
  assertEqual
};

//test code
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



