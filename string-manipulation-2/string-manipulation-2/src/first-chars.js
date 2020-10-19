/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  var newString = '';

  if (string.length !== 0) {
    for (var i = 0; i < length && i < string.length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
