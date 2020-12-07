/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even Numbers: ', evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log('Over Five: ', overFive);

const startWithE = names.filter(name => name[0] === 'E');
console.log('Starts with E: ', startWithE);

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('Has D: ', haveD);
