const express = require('express');
const path = require('path');

const app = express();

const myPath = path.join(__dirname, 'public');
const myFiles = express.static(myPath);
app.use(myFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
