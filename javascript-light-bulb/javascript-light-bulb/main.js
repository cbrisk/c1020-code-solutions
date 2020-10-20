var $container = document.querySelector('.container');
var $circle = document.querySelector('.circle');

$circle.addEventListener('click', function (event) {
  $circle.classList.add('circle-clicked');
  $container.classList.add('container-clicked');
});
