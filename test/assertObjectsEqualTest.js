const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require("chai").assert;
const inspect = require("util").inspect;

describe("#eqObjects", () => {
  const ab = {
    a: "1",
    b: "2"
  };

  const ba = {
    b: "2",
    a: "1"
  };

  it(`returns true when compare ${inspect(ab)} ${inspect(ba)}`, () => {
    assert.strictEqual(assertObjectsEqual(ab, ba), true);
  });

  const abc = {
    a: "1",
    b: "2",
    c: "3"
  };

  it(`returns false when compare ${inspect(ab)} ${inspect(abc)}`, () => {
    assert.strictEqual(assertObjectsEqual(ab, abc), false);
  });

  const cd = {
    c: "1",
    d: ["2", 3]
  };
  const dc = {
    d: ["2", 3],
    c: "1"
  };

  it(`returns true when compare ${inspect(cd)} ${inspect(dc)}`, () => {
    assert.strictEqual(assertObjectsEqual(cd, dc), true);
  });

  const cd2 = {
    c: "1",
    d: ["2", 3, 4]
  };

  it(`returns false when compare ${inspect(cd)} ${inspect(cd2)}`, () => {
    assert.strictEqual(assertObjectsEqual(cd, cd2), false);
  });

});