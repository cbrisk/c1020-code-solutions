/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (number; number >= 0; number--) {
    numbers.push(number);
  }
  return numbers;
}
