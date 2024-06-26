// Http module

const http = require('http');
const countStudents = require('./3-read_file_async');

const handleRequest = ((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    const inputDatabase = process.argv[2] !== undefined ? process.argv[2] : '';
    countStudents(inputDatabase)
      .then((loggedContent) => {
        response.statusCode = 200;
        response.end(`This is the list of our students\n${loggedContent}`);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    response.statusCode = 404;
    response.end('404 Not Found\n');
  }
});

const app = http.createServer(handleRequest);
const port = 1245;
app.listen(port, () => {

});

module.exports = app;
