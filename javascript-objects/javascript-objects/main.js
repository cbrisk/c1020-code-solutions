/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Chaim',
  lastName: 'Brisk',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Full name: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Teacher';

console.log('Lives in Irvine: ', student.livesInIrvine);
console.log('Previous Occupation: ', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: '2020'
};

vehicle['color'] = 'Blue';
vehicle['isConvertible'] = false;

console.log('Color of Vehicle: ', vehicle['color']);
console.log('Is Convertible: ', vehicle['isConvertible']);
console.log('Vehicle: ', vehicle);

var pet = {
  name: 'Steely',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('Pet: ', pet);
