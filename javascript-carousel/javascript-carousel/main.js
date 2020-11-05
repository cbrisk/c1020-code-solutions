var $icons = document.querySelectorAll('.size2');
var $image = document.querySelector('img');
var imageUrl = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var x = 0; // Used to keep track which image to display
$image.setAttribute('src', imageUrl[x]);

var counter = 3; // After user selects change, goes back to narmal after 3 secs

setInterval(function () {
  if (counter === 3) {
    if (x < imageUrl.length - 1 && iconClick === false) {
      x++;
    } else {
      x = 0;
    }
    iconClick = false; // reset to false, so it should't be back at zero
    display(x);
  }
}, 3000);

var iconClick = false;
document.addEventListener('click', function (event) {
  if (!event.target.matches('i')) {
    return;
  }
  counter = 0;
  if (event.target.matches('i.fa-chevron-right')) {
    if (x < imageUrl.length - 1) {
      x++;
    } else {
      x = 0;
    }
    display(x);
  } else if (event.target.matches('i.fa-chevron-left')) {
    if (x > 0) {
      x--;
    } else {
      x = imageUrl.length - 1;
    }
    display(x);
  } else { // If user clicks one of the circles
    for (var i = 0; i < $icons.length; i++) {
      if ($icons[i] === event.target) {
        x = i;
        display(x);
      }
    }
    iconClick = true;
  }
  setTimeout(function () { // Function for resuming the carousel after 3 secs
    counter = 3;
  }, 3000);
});

var display = function (x) {
  $image.setAttribute('src', imageUrl[x]);
  for (var i = 0; i < $icons.length; i++) {
    if (i === x) {
      $icons[i].className = 'size2 fas fa-circle';
    } else {
      $icons[i].className = 'size2 far fa-circle';
    }
  }
};
