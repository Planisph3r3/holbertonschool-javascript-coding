#!/usr/bin/node

const request = require('request')

const promptArg = process.argv[2]

request(promptArg, (error, response, body) => {
  if (error) {
    console.log('Error on request')
    return
  }
  if (response.statusCode !== 200) {
    console.log(`Failed to retreive data. code: ${response.statusCode}`)
    return
  }
  const objJson = JSON.parse(body)
  function todosIdentifier (objJson) {
    let todosCounter = 0
    let idRaiser = 1
    const objStore = {}
    for (const idx of objJson) {
      if (idx.completed === true && idx.userId === idRaiser) {
        todosCounter += 1
      } else if (idx.userId !== idRaiser) {
        objStore[idRaiser] = todosCounter
        idRaiser += 1
        todosCounter = 0
      }
    };
    objStore[idRaiser] = todosCounter
    console.log(objStore)
  }
  todosIdentifier(objJson)
})
