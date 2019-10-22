const assertDeepEqual = require('chai').assert.deepEqual;
const countLetters = require("../countLetters");
const inspect = require('util').inspect;


describe("countLetters()", () => {
  const obj = countLetters("lighthouse in the house");
  const target = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

  it(`returns an object containing the letters of appeared times`, () => {
    assertDeepEqual(obj, target);
  });

});