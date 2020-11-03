function ExampleConstructor() {

}
console.log('ExampleConstructor.prototype : ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var myFunction = new ExampleConstructor();
console.log('My function with new(): ', myFunction);

var isInstance = myFunction instanceof ExampleConstructor;
console.log('Is instance? ', isInstance);
