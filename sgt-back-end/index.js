const express = require('express');
const app = express();

app.use(express.json());

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const grade = req.body;
  const score = parseInt(grade.score);
  if (grade.name === undefined || grade.course === undefined || grade.score === undefined) {
    res.status(400).json({
      error: 'Content is a required field'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be between 1 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades"("name", "course", "score")
    values($1, $2, $3)
    returning *
  `;
  const values = [grade.name, grade.course, grade.score];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const idNum = parseInt(req.params.gradeId);
  const grade = req.body;
  const score = parseInt(grade.score);
  if (grade.name === undefined || grade.course === undefined || grade.score === undefined) {
    res.status(400).json({
      error: 'Content is a required field'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be between 1 and 100'
    });
    return;
  } if (!Number.isInteger(idNum) || idNum < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;
  const params = [grade.name, grade.course, grade.score, idNum];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${idNum}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const idNum = parseInt(req.params.gradeId);
  if (!Number.isInteger(idNum) || idNum < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
     returning *
  `;
  const params = [idNum];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${idNum}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
