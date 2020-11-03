/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var fn = this.firstName + ' ' + this.lastName;
  return fn;
};

Student.prototype.getIntroduction = function () {
  var intro = 'Hello, my name is ' + this.firstName + ' ' +
               this.lastName + ' and I am studying ' + this.subject + '.';
  return intro;
};
