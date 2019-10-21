const eqArrays = function(array1, array2) {

  // if (!((typeof(array1) === 'object') && (array1 instanceof Array))) {
  //   console.log("Type Error");
  //   return -1;
  // }
  
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return false;
    }
  } else {
    return false;
  }

  return true;
};

module.exports = eqArrays;
