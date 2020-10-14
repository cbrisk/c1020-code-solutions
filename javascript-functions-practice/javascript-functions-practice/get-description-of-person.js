/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var fullDetails = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return fullDetails;
}
