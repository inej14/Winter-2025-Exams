// Refactor following solution
// Find longest string

const longest = function (line = []) {
  let string = '';
  for (const i of line) {
    if (i.length > string.length) {
          string = i;
        }
    }

  return string;
};

module.exports = longest;
