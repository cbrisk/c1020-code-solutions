/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var newString = '';

  if (length > string.length) {
    newString += string;
  } else if (string.length !== 0) {
    for (var i = string.length - length; i < string.length; i++) {
      newString += string[i];
    }
  }
  return newString;
}
