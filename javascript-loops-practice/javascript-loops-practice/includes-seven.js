/* exported includesSeven */
function includesSeven(array) {
  var containsSeven = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      containsSeven = true;
    }
  }
  return containsSeven;
}
