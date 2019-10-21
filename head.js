const head = function(array) {
  if (Array.isArray(array)) {
    return array[0];
  } else {
    return;
  }
};

module.exports = head;
