#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error on request:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`Failed to retrieve data. Code: ${response.statusCode}`);
    return;
  }

  const objJson = JSON.parse(body);
  const objStore = {};
  let todosCounter = 0;
  let idRaiser = 1;

  for (const idx of objJson) {
    if (idx.completed === true && idx.userId === idRaiser) {
      todosCounter++;
    } else if (idx.userId !== idRaiser) {
      objStore[idRaiser] = todosCounter;
      idRaiser++;
      if (idx.completed) {
        todosCounter = 1;
      } else {
        todosCounter = 0;
      }
    }
  }
  objStore[idRaiser] = todosCounter;

  const hasCompletedTasks = Object.values(objStore).some(count => count > 0);

  if (hasCompletedTasks) {
    console.log(objStore);
  } else {
    console.log('{}');
  }
});
