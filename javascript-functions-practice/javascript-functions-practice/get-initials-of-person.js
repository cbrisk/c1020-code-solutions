/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialF = person.firstName.charAt(0);
  var initialL = person.lastName.charAt(0);
  return initialF + initialL;
}
