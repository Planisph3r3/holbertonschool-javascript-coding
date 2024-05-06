// Http module

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  const { url, method } = request;

  if (method === 'GET' && url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents('database.csv')
      .then((loggedContent) => {
        response.statusCode = 200;
        response.end('This is the list of our students\n' + `${loggedContent}`);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error);
      });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found\n');
  }
});

app.listen(1245, () => {

});
