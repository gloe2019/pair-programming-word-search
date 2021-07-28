const transpose = function (matrix) {
  let finalArray = [];
  let stagingArray = [];
  let counter = matrix[0].length;
  while (counter > 0) {
    for (const array of matrix) {
      for (let i = 0; i < array.length; i++) {
        stagingArray.push(array.shift());
        break;
      }
    }
    finalArray.push(stagingArray.join(""));
    stagingArray = [];
    counter--;
  }
  return finalArray;
};

const iterate = (matrix, word) => {
  for (const l of matrix) {
    let reversed = l.split("").reverse().join("");
    if (l.includes(word) || reversed.includes(word)) {
      return true;
    }
  }
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters);
  let found = false;

  iterate(horizontalJoin, word) || iterate(verticalJoin, word)
    ? (found = true)
    : (found = false);
  return found;
};

module.exports = wordSearch;
