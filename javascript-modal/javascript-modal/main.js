var $button = document.querySelector('button.one');
var $modalButton = document.querySelector('button.two');
var $background = document.querySelector('div');
var $div = document.querySelector('div > div');

$button.addEventListener('click', function (event) {
  $div.className = 'modal';
  $background.className = 'background';
});

$modalButton.addEventListener('click', function (event) {
  $background.className = 'none';
});
