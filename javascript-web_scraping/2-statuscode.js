#!/usr/bin/node

const request = require('request');

const urlArg = process.argv[2];

request
  .get(urlArg)
  .on('response', function (response) {
    console.log(`code: ${response.statusCode}`);
  });
