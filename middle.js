const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    let midIndex = Math.ceil(array.length / 2) - 1;
    if (array.length % 2) {
      return [array[midIndex]];
    } else {
      return [array[midIndex], array[midIndex + 1]];
    }
  }
};


module.exports = middle;