const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.use(express.json());

app.get('/api/grades', function (req, res) {
  res.json(grades);
});

app.post('/api/grades', function (req, res) {
  const obj = req.body;
  obj.id = nextId;
  nextId++;
  grades.push(obj);
  res.status(201).json(obj);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
