//The function will return a "slice of the array with elements taken from the beginning."
//It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;
};

module.exports = takeUntil;

