//import assertEqual function in another js file.

const tail = function(array) {
  if (Array.isArray(array)) {
    console.log(array.slice(1));
    return array.slice(1);
  } else {
    return;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(String.fromCodePoint(0x1F44d) + " Assertion Passed: [" + actual + "] === [" + expected + "]");
    //use template string to output
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F625)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
