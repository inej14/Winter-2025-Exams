// Refactor following solution
// Copy all values from dict except listed

const except = (incomingvaluesarray, ...no) => {
  const intermediateVariable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  for (let Z of intermediateVariable) {
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      }
    }
  return incomingvaluesarray;
}

module.exports = except;
