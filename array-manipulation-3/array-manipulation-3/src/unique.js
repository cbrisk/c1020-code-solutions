/* eslint-disable no-unused-vars */
function unique(array) {
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
