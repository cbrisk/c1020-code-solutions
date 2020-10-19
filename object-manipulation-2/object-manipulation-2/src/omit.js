/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var obj = {};

  for (var key in source) {
    var contains = false;
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        contains = true;
        break;
      }
    }
    if (contains === false) {
      obj[key] = source[key];
    }
  }
  return obj;
}
