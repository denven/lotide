// this function takes in an object and a callback as parameters
// It scans the object and return the first key for which the callback returns a truthy value,
// If no key is found, then it should return undefined.
const findKey = function(obj, callback) {
  let firstKey = "undefined";
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      firstKey = key;
      break;
    }
  }
  return firstKey;
};

const fKey = findKey({
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
}, x => x.stars === 2); // => "noma"


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F44d)}  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${String.fromCodePoint(0x1F626)} Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//test code
assertEqual(fKey, "noma");


