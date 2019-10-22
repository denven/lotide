const without = require("../without");
const assert = require("chai").assert;
const inspect = require("util").inspect;

describe("#without()", () => {

  const words = ["hello", "world", "lighthouse"];
  it(`returns ["hello", "world"] when without ["lighthouse"] from ${inspect(words)}`, () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
    assert.deepEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]);
    assert.deepEqual(without(["1", "2", "3"], ["3", "1"]), ["2"]);
  });

});
