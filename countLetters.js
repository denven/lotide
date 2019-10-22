//count letters which appear from the input string
//return an objects which display the count of each letter appears in the string
//do not counting spaces right now
const countLetters = function(strToCount) {
  const letterCount = {};
  let strCharArray = strToCount.replace(/\s*/g,"").split("");
  for (const letter of strCharArray) {
    (letterCount[letter] === undefined) ? letterCount[letter] = 1 : letterCount[letter]++;
  }
  return letterCount;
};

module.exports = countLetters;

