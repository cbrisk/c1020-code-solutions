var $nodeList = document.querySelectorAll('span');
// var length = $nodeList.length;
var index = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $nodeList[index].textContent) {
    index++;
    $nodeList[index].classList.add('current');
    $nodeList[index - 1].className = 'green';
  } else {
    $nodeList[index].className = 'current red';
  }
});
