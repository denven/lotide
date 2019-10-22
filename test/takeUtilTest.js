const takeUtil = require("../takeUntil");
const assert = require("chai").assert;
const inspect = require("util").inspect;

describe("#takeUntil()", () => {
  const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const str  = ["s","t","r","i","n","g","Lighthouse Labs"];

  it(`returns the un-negative number in an array ${inspect(data)}`, () => {
    assert.deepEqual(takeUtil(data, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`returns the elements before getting an comma ${inspect(data2)}`, () => {
    assert.deepEqual(takeUtil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it(`returns single-letter elemetns in an array ${inspect(str)}`, () => {
    assert.deepEqual(takeUtil(str, x => x.length > 1), ["s","t","r","i","n","g"]);
  });
});

