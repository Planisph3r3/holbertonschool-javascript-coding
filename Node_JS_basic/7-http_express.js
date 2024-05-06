// Import Express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents('database.csv')
    .then((loggedContent) => {
      res.send(`This is the list of our students\n${loggedContent}`);
    })
    .catch((error) => {
      res.send(error);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
