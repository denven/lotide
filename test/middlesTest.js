const assertDeepEqual = require('chai').assert.deepEqual;
const middle = require("../middle");

describe("#middle", () => {
  it(`returns [2] for the middle of array ["1", "2", "3"]`, () => {
    assertDeepEqual(middle(["1", "2", "3"]), ["2"]);
  });

  it(`returns ["2", "3"] for the middle of array ["1", "2", "3", "4"]`, () => {
    assertDeepEqual(middle(["1", "2", "3", "4"]), ["2", "3"]);
  });

  it(`returns ["2", 3] for the middle of array ["1", "2", "3"]`, () => {
    assertDeepEqual(middle(["1", "2", 3, "4"]), ["2", 3]);
  });

  it(`returns [2, 3] for the middle of array ["1", "2", 3, "4"]`, () => {
    assertDeepEqual(middle(["1", 2, 3, "4"]), [2, 3]);
  });

  it(`returns [] for the middle of array ["1", "2"]`, () => {
    assertDeepEqual(middle(["1", "2"]), []);
  });

});
