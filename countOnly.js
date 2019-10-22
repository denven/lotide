// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
 
  const results = {}; 
  for (const key of Object.keys(itemsToCount)) {
    let count = 0;
    for (const item of allItems) {
      if (item === key && itemsToCount[key]) {
        results[key] = ++count;
      }
    }
    count = 0;
  }
  
  return results;
};

module.exports = countOnly;

