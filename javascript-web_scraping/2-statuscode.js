#!/usr/bin/node

const request = require('request')

const urlArg = process.argv[1]

request
  .get(urlArg)
  .on('response', function (response) {
    console.log(`code: ${response.statusCode}`)
  })
