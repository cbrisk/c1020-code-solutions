/* eslint-disable no-console */
const json = require('./data.json');
const fs = require('fs');

const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

app.get('/api/notes', function (req, res) {
  if (json.notes !== {}) {
    for (var note in json.notes) {
      notes.push(json.notes[note]);
    }
  }
  res.json(notes);
});

app.get('/api/notes/:id', function (req, res) {
  const idNum = parseInt(req.params.id);
  if (idNum < 1) {
    res.status(400).json({ error: "ID's must be positive numbers" });
  } else {
    if (json.notes[req.params.id]) {
      res.json(json.notes[req.params.id]);
    } else {
      res.status(404).json({ error: 'No note found with Id ' + req.params.id });
    }
  }
});

app.post('/api/notes', function (req, res) {
  const obj = req.body;
  if (obj.content === undefined) {
    res.status(400).json({ error: 'Content is a required field' });
  } else {
    json.notes[json.nextId] = { id: json.nextId, content: obj.content };
    json.nextId++;
    fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(json.notes[json.nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  const idNum = parseInt(req.params.id);
  if (idNum < 1) {
    res.status(400).json({ error: "ID's must be positive numbers" });
  } else {
    if (req.params.id) {
      delete json.notes[req.params.id];
      fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).json({ error: 'No note found with Id ' + req.params.id });
    }
  }
});

app.put('/api/notes/:id', function (req, res) {
  const idNum = parseInt(req.params.id);
  const obj = req.body;
  if (idNum < 1) {
    res.status(400).json({ error: "ID's must be positive numbers" });
  } else if (obj.content === undefined) {
    res.status(400).json({ error: 'Content is a required field' });
  } else {
    if (json.notes[req.params.id]) {
      json.notes[req.params.id].content = obj.content;
      fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.json(json.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).json({ error: 'No note found with Id ' + req.params.id });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
