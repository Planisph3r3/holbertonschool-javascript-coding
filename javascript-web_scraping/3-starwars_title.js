#!/usr/bin/node

const request = require('request');

const promptArg = process.argv[2];

const urlArg = `https://swapi-api.hbtn.io/api/films/${promptArg}`;

request(urlArg, (error, response, body) => {
  if (error) {
    console.log('Error on request');
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Failed to retreive data. code: ${response.statusCode}`);
    return;
  }

  const objJson = JSON.parse(body);
  console.log(objJson.title);
});
