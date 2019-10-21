//import assertEqual function in another js file.
const tail = function(array) {
  if (Array.isArray(array)) {
    return array.slice(1);
  } else {
    return;
  }
};

module.exports = tail;