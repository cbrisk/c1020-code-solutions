/* eslint-disable no-unused-vars */
function intersection(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
