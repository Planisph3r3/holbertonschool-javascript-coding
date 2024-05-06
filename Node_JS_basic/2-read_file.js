// Reading file synchronously
const fs = require('fs');

function createArrayOfObjects(dataArray) {
  const keys = dataArray.slice(0, 4);

  const arrayOfObjects = [];

  for (let i = 4; i < dataArray.length; i += 4) {
    const obj = {};

    for (let j = 0; j < keys.length; j += 1) {
      obj[keys[j]] = dataArray[i + j];
    }

    arrayOfObjects.push(obj);
  }

  return arrayOfObjects;
}

function countStudents(filePath) {
  try {
    const array = [];
    let stringify = '';
    const data = fs.readFileSync(filePath, 'utf-8');
    for (const letters of data) {
      if (letters === ',' || letters === '\n' || letters === '\r') {
        if (stringify.trim() !== '') {
          array.push(stringify.trim());
        }
        stringify = '';
      } else {
        stringify += letters;
      }
    }
    if (stringify.trim() !== '') {
      array.push(stringify.trim());
    }

    const parsedCsv = createArrayOfObjects(array);
    console.log(`Number of students: ${parsedCsv.length}`);
    const fieldFilterCs = parsedCsv.filter((element) => element.field === 'CS');
    const firstNamesCs = fieldFilterCs.map((element) => element.firstname);
    console.log(`Number of students in CS: ${fieldFilterCs.length}. List: ${firstNamesCs.join(', ')}`);
    const fieldFilterSWE = parsedCsv.filter((element) => element.field === 'SWE');
    const firstNamesSWE = fieldFilterSWE.map((element) => element.firstname);
    console.log(`Number of students in SWE: ${fieldFilterSWE.length}. List: ${firstNamesSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
