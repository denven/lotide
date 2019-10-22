const assertDeepEqual = require('chai').assert.deepEqual;
const flatten = require("../flatten");
const inspect = require('util').inspect;

describe("#flatten", () => {
  const testArray1 = [1, 2, [3, 4], 5, [6]];
  const testArray2 = [1, 2, 3, [4, 5, 6]];

  it(`returns [1, 2, 3, 4, 5, 6] when flatten array \${inspect(testArray1)}`, () => {
    assertDeepEqual(flatten(testArray1), [1, 2, 3, 4, 5, 6]);
  });
  
  it(`returns [1, 2, 3, 4, 5, 6] when flatten array ${inspect(testArray2)}`, () => {
    assertDeepEqual(flatten(testArray2), [1, 2, 3, 4, 5, 6]);
  });
});
