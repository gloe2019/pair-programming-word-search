const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch");

// describe("#wordSearch()", function () {
//   it("should return false if the word is not present", function () {
//     const result = wordSearch(
//       [
//         ["A", "W", "C", "F", "Q", "U", "A", "L"],
//         ["S", "E", "I", "N", "F", "E", "L", "D"],
//         ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//         ["H", "M", "J", "T", "E", "V", "R", "G"],
//         ["W", "H", "C", "S", "Y", "E", "R", "L"],
//         ["B", "F", "R", "E", "N", "E", "Y", "B"],
//         ["U", "B", "T", "W", "A", "P", "A", "I"],
//         ["O", "D", "C", "A", "K", "U", "A", "S"],
//         ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//       ],
//       "FRANK"
//     );

//     assert.isFalse(result);
//   });

//   it("should return true if the word is present", function () {
//     const result = wordSearch(
//       [
//         ["A", "W", "C", "F", "Q", "U", "A", "L"],
//         ["S", "E", "I", "N", "F", "E", "L", "D"],
//         ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//         ["H", "M", "J", "T", "E", "V", "R", "G"],
//         ["W", "H", "C", "S", "Y", "E", "R", "L"],
//         ["B", "F", "R", "E", "N", "E", "Y", "B"],
//         ["U", "B", "T", "W", "A", "P", "A", "I"],
//         ["O", "D", "C", "A", "K", "U", "A", "S"],
//         ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//       ],
//       "SEINFELD"
//     );

//     assert.isTrue(result);
//   });
// });

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["H", "F", "C", "F", "Q", "U", "A", "L"],
        ["L", "M", "J", "T", "E", "V", "R", "G"],
        ["E", "H", "C", "S", "Y", "E", "R", "L"],
        ["Y", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "ASHLEY"
    );

    assert.isTrue(result);
  });
  it("should return false matrix is empty", () => {
    const result = wordSearch([], "doesntmatter");
    assert.isFalse(result);
  });

  it("should return true if the string is present backwards", () => {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["H", "F", "C", "F", "Q", "U", "A", "L"],
        ["L", "M", "J", "T", "E", "V", "R", "G"],
        ["E", "H", "C", "S", "Y", "E", "R", "L"],
        ["Y", "E", "K", "A", "N", "S", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SNAKE"
    );
    assert.isTrue(result);
  });
});
