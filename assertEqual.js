const inspect = require('util').inspect; // to support print object content gracefuly

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`${String.fromCodePoint(0x1F626)}  Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertEqual;
