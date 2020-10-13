function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(10);
console.log('convertMinutesToSeconds result: ', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Beavis');
console.log('greet result: ', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(5, 10);
console.log('getArea result: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouch', lastName: 'Lamperouge' });
console.log('getFirstName result: ', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement result: ', getLastElementResult);
