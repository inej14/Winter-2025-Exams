// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const setA = new Set(data);
  const result = Array.from(setA)
  return result;
};

module.exports = distinct;
