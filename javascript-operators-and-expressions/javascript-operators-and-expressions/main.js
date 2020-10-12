/* eslint-disable no-console */
var width = 5;
var height = 8;
var area = width * height;

console.log('Area: ', area);
console.log('Typeof area: ', typeof area);

var payment = 50;
var bill = 20;
var change = payment - bill;

console.log('Change: ', change);
console.log('Typeof change: ', typeof change);

var quizzes = 80;
var midterm = 90;
var final = 95;
var grade = (quizzes + midterm + final) / 3;

console.log('Grade: ', grade);
console.log('Typeof grade: ', typeof grade);

var firstName = 'Chaim';
var lastName = 'Brisk';
var fullName = firstName + ' ' + lastName;

console.log('Full Name: ', fullName);
console.log('Typeof fullName: ', typeof fullName);

var pH = 9;
var isAcidic = pH < 7;

console.log('Is Acidic: ', isAcidic);
console.log('Typeof is acidic: ', typeof isAcidic);

var headCount = 10;
var isSparta = headCount === 300;

console.log('Is Sparta: ', isSparta);
console.log('Typeof isSparta: ', typeof isSparta);

var motto = fullName;
motto = motto + ' is the GOAT';

console.log('Motto: ', motto);
console.log('Typeof motto: ', typeof motto);
