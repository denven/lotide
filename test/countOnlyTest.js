const countOnly = require("./../countOnly.js");
const assert = require('chai').assert;
const assertDeep = require('chai').assert.deepEqual;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it(`returns 1 for the count of { "Jason": true, "Karima": true, "Fang": true}`, () => {
    assertDeep(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true}), {"Jason": 1, "Fang": 2});
  });

  it(`returns undefined for the count of {"Karima": true}`, () => {
    assertDeep(countOnly(firstNames, {"Karima": true}), {});
  });

  it(`returns 2 "Fang" for the the count of {"Fang": true}`, () => {
    assertDeep(countOnly(firstNames, {"Fang": true}), {"Fang": 2});
  });

});
