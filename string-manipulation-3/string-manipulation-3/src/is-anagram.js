/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  function createArray(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        array.push(string[i]);
      }
    }
    return array.sort();
  }
  var fArray = createArray(firstString);
  var sArray = createArray(secondString);

  if (fArray.toString() === sArray.toString()) {
    return true;
  } else {
    return false;
  }
}
