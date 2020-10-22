var $tabContainer = document.querySelector('.tab-container');
var $listTabs = document.querySelectorAll('.tab');
var $listView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $listTabs.length; i++) {
      if ($listTabs[i] === event.target) {
        $listTabs[i].classList.add('active');
      } else {
        $listTabs[i].classList.remove('active');
      }
    }
    var $attr = event.target.getAttribute('data-view');
    for (var j = 0; j < $listView.length; j++) {
      if ($listView[j].getAttribute('data-view') === $attr) {
        $listView[j].classList.remove('hidden');
      } else {
        $listView[j].classList.add('hidden');
      }
    }
  }
});
