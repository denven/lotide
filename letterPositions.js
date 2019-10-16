const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let charsArray = sentence.split("");
  
  for (const index in charsArray) {
    if (charsArray[index] !== " ") {
      (results[charsArray[index]] === undefined) ?
        results[charsArray[index]] = [index] :
        results[charsArray[index]].push(index);
    }
  }
  return results;
};

letterPositions("lighthouse in the house");

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }

  return true;
};

const assertArraysEqual = function(array1, array2, expected) {
  let actual = eqArrays(array1, array2);
  if (actual === expected) {
    //use template string to output, however, template string cannot display array elements as console.log
    //it removes the brackets and quotation marks arround elements, so I don't use ${array1} to concatenate data.
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequals");
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F625)}  Assertion Passed: `, array1, "and", array2, expected ? "equals" : "unequal");
  }
};

//assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
//assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0], true);

assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0], true);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11], true);
assertArraysEqual(letterPositions("lighthouse in the house")["g"], [2], true);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18], true);
assertArraysEqual(letterPositions("lighthouse in the house")["t"], [4, 14], true);
assertArraysEqual(letterPositions("lighthouse in the house")["o"], [6, 19], true);
assertArraysEqual(letterPositions("lighthouse in the house")["u"], [7, 20], true);
assertArraysEqual(letterPositions("lighthouse in the house")["s"], [8, 21], true);
assertArraysEqual(letterPositions("lighthouse in the house")["e"], [9, 16, 22], true);
assertArraysEqual(letterPositions("lighthouse in the house")["n"], [12], true);

