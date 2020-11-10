/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var keySource in source) {
    if (Object.keys(target).length === 0) {
      target[keySource] = source[keySource];
    } else {
      var contains = false;
      for (var keyTarget in target) {
        if (keyTarget === keySource) {
          contains = true;
          break;
        }
      }
      if (contains === false) {
        target[keySource] = source[keySource];
      }
    }
  }
}
