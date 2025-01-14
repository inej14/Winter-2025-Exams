// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict'

const invert = (array) => {
  const arr = [];
  for (let element of array)
  arr.unshift(element);
  array = arr;
  return array;
}

module.exports = invert;
