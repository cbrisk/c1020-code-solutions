var $h1 = document.querySelector('h1');
var num = 4;
setInterval(function () {
  num--;
  if (num > 0) {
    $h1.textContent = num;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
