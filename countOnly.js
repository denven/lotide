const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const key of Object.keys(itemsToCount)) {
    let count = 0;
    for (const item of allItems) {
      if (item === key && itemsToCount[key]) {
        results[key] = ++count;
      }
    }
    count = 0;
  }
  
  return results;
};


const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //use template string to output
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    //console.log(String.fromCodePoint(0x1F625) + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = {
  assertEqual
};

//test code
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
