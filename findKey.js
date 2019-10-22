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

module.exports = findKey;


