const map = require("../map");
const assert = require("chai").assert;

describe("#map()", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const word0 = ["g", "c", "t", "m", "t"];

  const newWords = ["This", "is", "the", "4th", "day", "of", "bootcamp"];
  const worde = ["s", "s", "e", "h", "y", "f", "p"];
  
  it(`returns the first letter of each element in an array`, () => {
    assert.deepEqual(map(words, word => word[0]), word0);
  });

  it(`returns the last letter of each element in an array`, () => {
    assert.deepEqual(map(newWords, word => word[word.length - 1]), worde);
  });

});