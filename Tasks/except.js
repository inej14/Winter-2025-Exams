// Refactor following solution
// Copy all values from dict except listed

const except = (incomingvaluesarray, ...no) => {
  const result = {}
  const keys = Object.keys(incomingvaluesarray);
  const list = [...no];
  for (let Z of keys) {
    if (!list.includes(Z)) {
      result[Z] = incomingvaluesarray[Z];
      }
    }
  return result;
}

module.exports = except;
