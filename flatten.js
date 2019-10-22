//Given an array with other arrays inside, it can flatten it into a single-level array.
const flatten = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let insertIndex = i;
      let subArrayLen = array[i].length;
      array[i].forEach(function(subArrElem) {
        //expand the original array
        array.splice(insertIndex++, 0, subArrElem);
      });
      //console.log(array);
      array.splice(insertIndex, 1);
      i += subArrayLen;
    }
  }
  return array;
};

module.exports = flatten;
