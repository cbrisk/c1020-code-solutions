/* eslint-disable no-console */
const fs = require('fs');

const array = [];
let filesLeft = process.argv.length - 2;

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    array[i] = data;
    filesLeft--;
    if (filesLeft === 0) {
      for (let j = 2; j < array.length; j++) {
        console.log(array[j]);
      }
    }
  });

}
