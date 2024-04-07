#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error on request:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to retrieve data. Code: ${response.statusCode}`);
    return;
  }

  writeFile(filePath, body);
});

function writeFile (filePath, body) {
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been written.');
  });
}
