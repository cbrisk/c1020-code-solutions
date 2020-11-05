var $images = document.querySelectorAll('img');
var $icons = document.querySelectorAll('.size2');

var x = 1;
var previous = x - 1;
var counter = 3;
var num = null;

setInterval(function () {
  if (counter === 3) {
    if (num) {
      $images[num].classList.add('hidden');
      $icons[num].className = 'size2 far fa-circle';
      x = 0;
    }
    clicks = 0;
    $images[x].classList.remove('hidden');
    $images[previous].classList.add('hidden');
    $icons[x].className = 'size2 fas fa-circle';
    $icons[previous].className = 'size2 far fa-circle';
    if (x === $images.length - 1) {
      x = 0;
      previous = $images.length - 1;
    } else {
      x++;
      previous = x - 1;
    }
    num = null;
  }
}, 3000);

var clicks = 0;

document.addEventListener('click', function (event) {
  if (!event.target.matches('i')) {
    return;
  }
  counter = 0;
  if (event.target.matches('i.fa-chevron-right')) {
    if (clicks >= 1) {
      if (x === $images.length - 1) {
        x = 0;
        previous = $images.length - 1;
      } else {
        x++;
        previous = x - 1;
      }
    }
    $images[x].classList.remove('hidden');
    $images[previous].classList.add('hidden');
    $icons[x].className = 'size2 fas fa-circle';
    $icons[previous].className = 'size2 far fa-circle';
    clicks++;
  } else if (event.target.matches('i.fa-chevron-left')) {
    if (clicks === 0) {
      if (x === 1) {
        x = $images.length - 1;
        previous = 0;
      } else if (x === 0) {
        x = $images.length - 2;
        previous = $images.length - 1;
      } else {
        x = x - 2;
        previous = x + 1;
      }
    } else {
      if (x === 0) {
        x = $images.length - 1;
        previous = 0;
      } else {
        x--;
        previous = x + 1;
      }
    }
    $images[x].classList.remove('hidden');
    $images[previous].classList.add('hidden');
    $icons[x].className = 'size2 fas fa-circle';
    $icons[previous].className = 'size2 far fa-circle';
    clicks++;
  } else {
    for (var i = 0; i < $icons.length; i++) {
      if ($icons[i] === event.target) {
        $images[i].classList.remove('hidden');
        $icons[i].className = 'size2 fas fa-circle';
        num = i;
      } else {
        $images[i].classList.add('hidden');
        $icons[i].className = 'size2 far fa-circle';
      }
    }
  }
  setTimeout(function () {
    counter = 3;
  }, 3000);
});
