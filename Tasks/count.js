// Refactor following solution
// Sum all number values in dict

const count = (obj) => {
  let sum = 0;
  for(const key in obj) {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  }
  return sum;
};

module.exports = count;
