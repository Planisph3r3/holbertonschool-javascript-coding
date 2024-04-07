#!/usr/bin/node

const fs = require('fs')

const filePath = process.argv[1]

const dataToWrite = process.argv[2]

fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err)
  }
})
