// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const eqPriTypes = function(value1, value2) {
    return (value1 === value2);
  };

  const eqObjKeys = function(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;

    for (const key1 of Object.keys(obj1)) {
      let bHasIdentical = false;
      for (const key2 of Object.keys(obj2)) {
        if (key1 === key2) bHasIdentical = true;
      }
      if (!bHasIdentical) return false;
    }
    return true;
  };

  const eqArrays = function(array1, array2) {
    if (array1.length === array2.length) {
      for (const index in array1) {
        if (array1[index] !== array2[index]) return false;
      }
    } else {
      return false;
    }
    //console.log("keys are the same");
    return true;
  };

  //when both objects have the same keys
  //if (eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {
  if (eqObjKeys(Object.keys(object1), Object.keys(object2))) {
    //check keyvalue for both objects
    for (const key of Object.keys(object1)) {
      if (typeof(object1[key]) !== typeof(object2[key])) {
        return false;
      }
      //we treat the object as an array(however, it may be other types of object)
      if (typeof(object1[key]) === 'object') {
        if (!eqArrays(object1[key], object2[key])) return false;
      } else {
        if (!eqPriTypes(object1[key], object2[key])) return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

module.exports = eqObjects;