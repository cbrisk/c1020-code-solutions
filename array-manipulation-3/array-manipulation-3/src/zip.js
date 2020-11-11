/* eslint-disable no-unused-vars */
function zip(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length && i < second.length; i++) {
    newArray[i] = [first[i], second[i]];
  }
  return newArray;
}
