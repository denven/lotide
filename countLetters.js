//count letters which appear from the input string
const countLetters = function(strToCount) {
  const letterCount = {};
  let strCharArray = strToCount.replace(/\s*/g,"").split("");
  for (const letter of strCharArray) {
    (letterCount[letter] === undefined) ? letterCount[letter] = 1 : letterCount[letter]++;
  }
  return letterCount;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //use template string to output
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//test code
console.log(countLetters("lighthouse in the house"));
//objects cannot be equal directly
//assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
