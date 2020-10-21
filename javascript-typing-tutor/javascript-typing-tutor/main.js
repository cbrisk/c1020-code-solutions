var $nodeList = document.querySelectorAll('span');
var length = $nodeList.length;
var index = 0;
var $div = document.querySelector('div.play');
// var $button = document.querySelector('button');

document.addEventListener('keydown', function (event) {
  if (event.key.trim() === $nodeList[index].textContent.trim()) {
    if (index < length - 1) {
      index++;
      $nodeList[index].classList.add('current');
      $nodeList[index - 1].className = 'green';
    } else {
      $nodeList[index].className = 'green';
      $div.classList.remove('none');
    }
  } else {
    $nodeList[index].className = 'red';
  }
});
