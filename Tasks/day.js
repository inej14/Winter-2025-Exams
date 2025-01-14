// Refactor following solution
// Get day number

'use strict'

const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const parseDay = (s) => {
  const index = dayOfWeek.indexOf(s);
    return index + 1 || -1;
    };

module.exports = parseDay;
