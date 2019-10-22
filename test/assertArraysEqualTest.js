const assertArraysEqual =  require("../assertArraysEqual");
const assert = require("chai").assert;
const inspect = require("util").inspect;

describe("#assertArraysEqual()", () => {
  let array1 = ["1", "2", "3"];
  let array2 = ["1", 2, "3"];

  it(`returns false when equal array ${inspect(array1)} and ${inspect(array2)}`, () => {
    assert.strictEqual(assertArraysEqual(array1, array2), false);
  });
});
