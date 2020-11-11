/* eslint-disable no-unused-vars */
function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) !== -1) {
      newArray.splice(newArray.indexOf(second[j]), 1);
    } else {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
