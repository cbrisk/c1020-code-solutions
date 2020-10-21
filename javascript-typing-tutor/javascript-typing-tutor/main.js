var $nodeList = document.querySelectorAll('span');
var length = $nodeList.length;
var index = 0;
var $div = document.querySelector('div.play');
var $para = document.querySelector('p.score');
var $button = document.querySelector('button');
var wrong = 0;

document.addEventListener('keydown', function (event) {
  if (event.key.trim() === $nodeList[index].textContent.trim()) {
    if (index < length - 1) {
      index++;
      $nodeList[index].classList.add('current');
      $nodeList[index - 1].className = 'green';
    } else {
      $nodeList[index].className = 'green';
      $div.classList.remove('none');
      $para.textContent = 'Your typing accuracy is ' + Math.floor(100 - (100 / length * wrong)) + '%';
    }
  } else {
    $nodeList[index].className = 'red';
    wrong++;
  }
});

$button.addEventListener('click', function (event) {
  $para.textContent = '';
  index = 0;
  wrong = 0;
  $nodeList[index].classList.add('current');
  $div.classList.add('none');

  for (var i = 0; i < length; i++) {
    $nodeList[i].classList.remove('green');
  }
});
