// Refactor following solution
// Copy all values from dict except listed

const except = (incomingvaluesarray, ...no) => {
  const intermediateVariable = Object.keys(incomingvaluesarray);
  const result = {}
  for (let Z of intermediateVariable) {
    if (no.includes(Z)) {
      result[Z] = incomingvaluesarray[Z];
      }
    }
  return result;
}

module.exports = except;
