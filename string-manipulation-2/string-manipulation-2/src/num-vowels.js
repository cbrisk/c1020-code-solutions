/* eslint-disable no-unused-vars */
function numVowels(string) {
  var vowelCount = 0;
  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}
