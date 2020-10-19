/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var obj = {};

  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}
