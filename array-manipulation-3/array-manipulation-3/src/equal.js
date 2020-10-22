/* eslint-disable no-unused-vars */
function equal(first, second) {
  var equals = 0;
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      equals++;
    }
  }
  if (equals === first.length) {
    return true;
  } else {
    return false;
  }
}
