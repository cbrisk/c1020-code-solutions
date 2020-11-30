/* eslint-disable no-console */
const json = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'read') {
  for (var id in json.notes) {
    console.log(id + ': ' + json.notes[id]);
  }
} else if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  json.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  delete json.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;
  });
} else {
  console.log('No such operation available');
}
