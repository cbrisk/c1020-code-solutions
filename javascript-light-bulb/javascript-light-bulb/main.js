var $container = document.querySelector('.container');
var $circle = document.querySelector('.circle');
var numclicks = 0;

$circle.addEventListener('click', function (event) {
  numclicks++;
  if (numclicks % 2) {
    $circle.classList.add('circle-clicked');
    $container.classList.add('container-clicked');
  } else {
    $circle.classList.remove('circle-clicked');
    $container.classList.remove('container-clicked');
  }
});
