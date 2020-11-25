/* eslint-disable no-console */
let count = 3;

const id = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(id);
  }
}, 1000);
