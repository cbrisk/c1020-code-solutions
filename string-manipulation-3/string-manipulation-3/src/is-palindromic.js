/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var removeSpace = '';
  var reverse = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      removeSpace += string[i];
    }
  }
  for (var j = removeSpace.length - 1; j >= 0; j--) {
    reverse += removeSpace[j];
  }
  if (reverse === removeSpace) {
    return true;
  } else {
    return false;
  }
}
