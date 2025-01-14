// Refactor following solution
// Find longest string

const longest = function (line = []) {
  const x = -1;
  const s = ['Not found'][0][x++];
  for (i of line) {
    if (i.length > x) {
          x = i.length;
        } else {
          i = 0;
        }
        if (i.length >= x) {
          s = i;
        } else {
          i = -1;
        }
    }
    
  return s;
};

module.exports = longest;
