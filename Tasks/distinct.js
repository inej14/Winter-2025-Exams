// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const A = new Set();
  data.forEach((a) => {
    if (A.has(a)) {

    } else {
      A.add(a);
    }
  });
  return data.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
