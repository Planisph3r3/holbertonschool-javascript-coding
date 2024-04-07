#!/usr/bin/node

const request = require('request');

const promptArg = process.argv[2];

request(promptArg, (error, response, body) => {
  if (error) {
    console.log('Error on request');
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Failed to retreive data. code: ${response.statusCode}`);
    return;
  }
  // extraccct
  const objJson = JSON.parse(body);
  function characterCount (objJson) {
    let realcharCount = 0;
    const filmCount = objJson.count;
    for (let idx = 0; idx < filmCount; idx++) {
      for (const item of objJson.results[idx].characters) {
        if (item === 'https://swapi-api.hbtn.io/api/people/18/') {
          realcharCount += 1;
        }
      }
    }
    console.log(realcharCount);
  }
  characterCount(objJson);
});
