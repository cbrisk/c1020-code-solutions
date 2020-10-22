var $tasklist = document.querySelector('.task-list');

$tasklist.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var $parent = event.target.closest('li');
    console.log('Parent: ', $parent);
    $tasklist.removeChild($parent);
  }
});
