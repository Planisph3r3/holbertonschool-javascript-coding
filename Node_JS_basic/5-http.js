// Http module

const http = require('http');
const countStudents = require('./3-read_file_async');

const handleRequest = ((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  const { url, method } = request;

  if (method === 'GET' && url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    countStudents('database.csv')
      .then((loggedContent) => {
        response.statusCode = 200;
        response.end(`This is the list of our students\n${loggedContent}`);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error);
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
