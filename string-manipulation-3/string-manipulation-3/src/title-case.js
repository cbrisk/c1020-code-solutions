/* eslint-disable no-unused-vars */
function titleCase(title) {
  var newTitle = '';
  var strArray = title.split(' ');
  var lower = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on ', 'per', 'to'];

  for (var i = 0; i < strArray.length; i++) {
    if ((lower.indexOf(strArray[i]) !== -1 && i !== 0) || (strArray[i] === 'the' && newTitle[newTitle.length - 2] !== ':')) {
      newTitle += strArray[i];
    } else if (strArray[i].toLowerCase() === 'javascript:') {
      newTitle += 'JavaScript:';
    } else if (strArray[i].toLowerCase() === 'javascript') {
      newTitle += 'JavaScript';
    } else if (strArray[i] === 'api') {
      newTitle += 'API';
    } else {
      for (var j = 0; j < strArray[i].length; j++) {
        if (j === 0 || strArray[i].charAt(j - 1) === '-') {
          newTitle += strArray[i].charAt(j).toUpperCase();
        } else {
          newTitle += strArray[i].charAt(j);
        }
      }
    }
    if (i !== strArray.length - 1) {
      newTitle += ' ';
    }
  }
  return newTitle;
}
