/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise = takeAChance('Chaim');

promise.then(value => {
  console.log(value);
});

promise.catch(error => {
  console.error(error.message);
});
