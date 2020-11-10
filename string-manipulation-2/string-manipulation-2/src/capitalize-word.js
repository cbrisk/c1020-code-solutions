/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = '';
  if (word.toLowerCase() === 'javascript') {
    newWord = 'JavaScript';
    return newWord;
  }
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
