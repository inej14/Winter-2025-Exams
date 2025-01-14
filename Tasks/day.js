// Refactor following solution
// Get day number

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (s) => {
  let i;
  for (i = 0; i < dayOfWeek.length; i++) {
    if (s.startsWith(dayOfWeek[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
