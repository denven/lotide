const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("letterPositions", () => {
  const inputStr = "lighthouse in the house";
  it(`return an object when get letters postions in string ${inputStr}`, () => {
    assert.deepEqual(letterPositions(inputStr),{
      "l": ["0"],
      "i": ["1", "11"],
      "g": ["2"],
      "h": ["3", "5", "15", "18"],
      "t": ["4", "14"],
      "o": ["6", "19"],
      "u": ["7", "20"],
      "s": ["8", "21"],
      "e": ["9", "16", "22"],
      "n": ["12"]
    });
  });
});
