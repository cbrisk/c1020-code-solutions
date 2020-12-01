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

app.get('/api/grades', (req, res, next) => {
  res.json(grades);
  next();
});

app.delete('/api/grades/:id', (req, res) => {
  const idNum = req.params.id;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id.toString() === idNum) {
      grades.splice(i, 1);
      res.sendStatus(204);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
