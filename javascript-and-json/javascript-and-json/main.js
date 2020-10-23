var array = [
  {
    isbn: '9780026515627',
    title: 'Glencoe Health : A Guide to Wellness',
    author: 'Merki, Mary Bronson'
  },
  {
    isbn: '9780072321111',
    title: 'Digital Communications',
    author: 'Proakis,John'
  },
  {
    isbn: '9780072398878',
    title: 'Management of a Sales Force',
    author: 'Spiro, Rosann L.'
  }
];

console.log('My Array: ', array);
console.log('My Array type: ', typeof array);

var string = JSON.stringify(array);
console.log('Using JSON.stringify: ', string);
console.log('My Stringify type: ', typeof string);

var student = '{"id": 2009, "name": "Chaim Brisk"}';

console.log('My JSON string: ', student);
console.log('My JSON string type: ', typeof student);

var object = JSON.parse(student);

console.log('My JSON object: ', object);
console.log('My JSON object type: ', typeof object);
