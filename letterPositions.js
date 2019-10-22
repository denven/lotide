//return an object which contains keys to indictate the postions of each letter
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let charsArray = sentence.split("");
  
  for (const index in charsArray) {
    if (charsArray[index] !== " ") {
      (results[charsArray[index]] === undefined) ?
        results[charsArray[index]] = [index] :
        results[charsArray[index]].push(index);
    }
  }
  return results;
};

module.exports = letterPositions;