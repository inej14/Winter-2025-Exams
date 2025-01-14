// Refactor following solution
// Sum all number values in dict


const count = (obj) => {
  let sum = 0;
  for(const key in obj) {
    if (typeof obj[key]=== 'number') { 
      sum += obj[key];
  } 
}
  return sum;
};

module.exports = count;
