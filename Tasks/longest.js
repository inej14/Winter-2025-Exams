// Refactor following solution
// Find longest string

const longest = function (line = []) {
  let x = -1;
  let s = '';
  for (const i of line) {
    if (i.length > x) {
          x = i.length;
          s = i;
        }
    }

  return s;
};

module.exports = longest;
