// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (A) => {
  const T = [];
  for (let element of A) {
    T.unshift(element);
  }
  return T;
}

module.exports = invert;
