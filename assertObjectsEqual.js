const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  let bEqual = eqObjects(actual, expected);
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (bEqual) {
    console.log(`${String.fromCodePoint(0x1F44d)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;

