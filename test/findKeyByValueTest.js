const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");
const inspect = require('util').inspect;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it(`returns the first Key: "drama" for finding the by value "The Wire" in obj ${inspect(bestTVShowsByGenre)}`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`returns undefined: when finding a key with value "That '70s Show" in obj ${inspect(bestTVShowsByGenre)}`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});



