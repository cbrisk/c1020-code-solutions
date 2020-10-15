var num1 = 20;
var num2 = 30;
var num3 = 40;

var maximumValue = Math.max(num1, num2, num3);
console.log('Maximum Value: ', maximumValue);

var heroes = ['Ant Man', 'Aquaman', 'Asterix', 'The Atom'];
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('Value of Random Index: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Value of Random Hero: ', randomHero);

var library = [
  { title: 'Princess of Goble', author: 'Precious Kyei Bonsu' },
  { title: 'Kofi and the Crow', author: 'Peggy Appiah' },
  { title: ' Friends till the end', author: 'Amy Lee-Tai' }
];
var lastBook = library.pop();
console.log('Value of Last Book: ', lastBook);

var firstBook = library.shift();
console.log('Value of First Book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library Array: ', library);

var fullName = 'Chaim Brisk';
var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName: ', sayMyName);
