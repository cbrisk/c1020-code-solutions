const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Chaim Brisk',
    course: 'Math',
    grade: 9001
  },
  {
    id: 2,
    name: 'John Doe',
    course: 'CS',
    grade: 9050
  }
];

app.get('/api/grades', function (req, res) {
  res.send(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
