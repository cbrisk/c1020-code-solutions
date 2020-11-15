var $icons = document.querySelectorAll('.size2');
var $image = document.querySelector('img');
var imageUrl = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var i = 0; // Used to keep track which image to display
$image.setAttribute('src', imageUrl[i]);

var counter = 3; // After user selects change, goes back to normal after 3 secs

setInterval(function () {
  if (counter === 3) {
    if (i < imageUrl.length - 1 && iconClick === false) {
      i++;
    } else {
      i = 0;
    }
    iconClick = false; // reset to false, so it should't be back at zero
    display(i);
  }
}, 3000);

var iconClick = false;
document.addEventListener('click', function (event) {
  if (!event.target.matches('i')) {
    return;
  }
  counter = 0;
  if (event.target.matches('i.fa-chevron-right')) {
    if (i < imageUrl.length - 1) {
      i++;
    } else {
      i = 0;
    }
    display(i);
  } else if (event.target.matches('i.fa-chevron-left')) {
    if (i > 0) {
      i--;
    } else {
      i = imageUrl.length - 1;
    }
    display(i);
  } else { // If user clicks one of the circles
    for (i = 0; i < $icons.length; i++) {
      if ($icons[i] === event.target) {
        display(i);
      }
    }
    iconClick = true;
  }
  setTimeout(function () { // Function for resuming the carousel after 3 secs
    counter = 3;
  }, 3000);
});

var display = function (i) {
  $image.setAttribute('src', imageUrl[i]);
  for (var j = 0; j < $icons.length; j++) {
    if (j === i) {
      $icons[j].className = 'size2 fas fa-circle';
    } else {
      $icons[j].className = 'size2 far fa-circle';
    }
  }
};
