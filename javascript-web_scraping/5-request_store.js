#!/usr/bin/node

const request = require('request')

const promptArg = process.argv[1]

request(promptArg, (error, response, body) => {
  if (error) {
    console.log('Error on request')
    return
  }
  if (response.statusCode !== 200) {
    console.log(`Failed to retreive data. code: ${response.statusCode}`)
    return
  }
  writeFile(body)
})

function writeFile (body) {
  const fs = require('fs')

  const filePath = process.argv[2]

  const dataToWrite = body

  fs.writeFile(filePath, dataToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err)
      return
    }
    console.log('File has been written.')
  })
}
