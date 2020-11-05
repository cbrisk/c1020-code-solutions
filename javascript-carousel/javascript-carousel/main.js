var $images = document.querySelectorAll('img');
var $icons = document.querySelectorAll('.size2');

var x = 1; // Used to keep track which image to display
var previous = x - 1; // Used to keep track for hiding the previous image
var counter = 3; // After user selects change, goes back to narmal after 3 secs
var num = null; // Used if user clicks one of the circles, now we needto hide it

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

var clicks = 0; // If user clicks arrow, depending if was first click or not requires diffrent logic

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
  } else { // If user clicks one of the circles
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
  setTimeout(function () { // Function for resuming the carousel after 3 secs
    counter = 3;
  }, 3000);
});
