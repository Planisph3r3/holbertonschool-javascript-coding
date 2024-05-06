// Http module

const http = require('http');

const handleRequest = (_, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
};

const app = http.createServer(handleRequest);
const port = 1245;
app.listen(port, () => {

});

module.exports = app;
