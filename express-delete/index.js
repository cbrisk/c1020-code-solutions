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
  },
  {
    id: 3,
    name: 'Tom Bernie',
    course: 'Science',
    grade: 9075
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  const index = grades.findIndex(obj => obj.id === idNum);
  if (index !== -1) {
    grades.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
