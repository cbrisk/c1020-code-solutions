/* eslint-disable no-console */
const fs = require('fs');

const data = Math.random().toString();
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
