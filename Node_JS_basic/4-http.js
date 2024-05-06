// Http module

const http = require('http');

const app = http.createServer((_, response) => {
  response.setHeader('Content-Type', 'text/plain');
  response.statusCode = 200;
  response.end('Hello Holberton School!');
});

app.listen(1245, () => {
});
