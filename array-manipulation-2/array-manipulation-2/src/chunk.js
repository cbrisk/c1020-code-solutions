/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var newArray = [];

  if (array.length !== 0) {
    var index = 0;

    for (var numArray = 0; index < array.length; numArray++) {
      newArray[numArray] = [];
      for (var j = 0; j < size && index < array.length; j++, index++) {
        newArray[numArray].push(array[index]);
      }
    }
  }
  return newArray;
}
