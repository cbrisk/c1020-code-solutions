/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
