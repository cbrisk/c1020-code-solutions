/* eslint-disable no-unused-vars */
function invert(source) {
  var obj = {};

  for (var key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
