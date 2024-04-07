#!/usr/bin/node

const fs = require('fs')

const filePath = process.argv[1]

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }

  console.log(data)
})
