var $icons = document.querySelectorAll('.size2');
var $image = document.querySelector('img');
var imageUrl = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var i = 0; // Used to keep track which image to display
$image.setAttribute('src', imageUrl[i]);

var id = setTimeout(displayImg, 3000);

function displayImg() {
  if (i < imageUrl.length - 1) {
    i++;
  } else {
    i = 0;
  }
  display(i);
  setTimeout(displayImg, 3000);
}

document.addEventListener('click', function (event) {
  if (!event.target.matches('i')) {
    return;
  }
  clearTimeout(id);
  if (event.target.matches('i.fa-chevron-right')) {
    if (i < imageUrl.length - 1) {
      i++;
    } else {
      i = 0;
    }
  } else if (event.target.matches('i.fa-chevron-left')) {
    if (i > 0) {
      i--;
    } else {
      i = imageUrl.length - 1;
    }
  } else { // If user clicks one of the circles
    for (i = 0; i < $icons.length; i++) {
      if ($icons[i] === event.target) {
        break;
      }
    }
  }
  display(i);
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
