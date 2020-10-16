/* eslint-disable no-unused-vars */
function getValues(object) {
  var values = [];

  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
