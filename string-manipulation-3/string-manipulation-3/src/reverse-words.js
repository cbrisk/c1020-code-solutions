/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var newString = '';
  var strArray = string.split(' ');

  for (var i = 0; i < strArray.length; i++) {
    for (var j = strArray[i].length - 1; j >= 0; j--) {
      newString += strArray[i].charAt(j);
    }
    newString += ' ';
  }
  return newString;
}
