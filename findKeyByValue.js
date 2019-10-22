
// return the key which has the keyValue
// if there is no key has a value of keyvalue, returns undefined
const findKeyByValue = function(obj, keyValue) {
  //the first way is to use array.find() method
  //let key = Object.keys(obj).find(function(key) {
  //  return obj[key] === keyValue;
  //});
  //return key;

  //try another way
  for (const key of Object.keys(obj)) {
    if ((obj[key]) === keyValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

