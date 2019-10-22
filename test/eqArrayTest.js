const assertDeepEqual = require('chai').assert.deepEqual;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it(`returns true when compare ["12", "2", "3"], ["12", "2", "3"]`, () => {
    assertDeepEqual(eqArrays(["12", "2", "3"], ["12", "2", "3"]), true); // => true
  });

  it(`returns false when compare ["1", "2", "3"], ["1", "2", 5]`, () => {
    assertDeepEqual(eqArrays(["1", "2", "3"], ["1", "2", 5]), false); // => true
  });

  it(`returns true when compare two empty arrays`, () => {
    assertDeepEqual(eqArrays([],[]), true);
  });

});
