const without = function(srcArray, removeArray) {
  srcArray.forEach(function(srcItem, index) {
    removeArray.forEach(function(itemToRemove) {
      if (srcItem === itemToRemove) {
        srcArray.splice(index, 1);
      }
    });
  });

  return srcArray;
};

module.exports = without;
