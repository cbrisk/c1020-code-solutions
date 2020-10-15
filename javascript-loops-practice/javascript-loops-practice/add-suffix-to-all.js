/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i] += suffix;
    suffixArray.push(word);
  }
  return suffixArray;
}
