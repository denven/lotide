const assert = require('chai').assert;
const tail = require("../tail.js");

describe("#tail", () => {
  it(`returns 2 strings for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });

  it(`returns 2 strings for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[1], "Labs");
  });

});





