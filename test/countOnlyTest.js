const assertMod = require("./../assertEqual.js");
const testObj = require("./../countOnly.js");
const assert = assertMod.assertEqual;

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

const result1 = testObj.countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});

assert(result1, 1);
assert(testObj.countOnly(firstNames, {"Karima": true}).Karima, undefined);
assert(testObj.countOnly(firstNames, {"Fang": true}).Fang, 2);
