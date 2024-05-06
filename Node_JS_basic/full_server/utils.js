// Read async

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

function readDatabase(filePath = '../database.csv') {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            try {
                let array = [];
                let stringify = '';

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

                

                const parsedCsv = createArrayOfObjects(array)
                const logNames = `Number of students: ${parsedCsv.length}`
                console.log(logNames)
                const fieldFilterCs = parsedCsv.filter(element => element.field === 'CS')
                const firstNamesCs = fieldFilterCs.map(element => element.firstname)
                const logFirstNamesCs = `Number of students in CS: ${fieldFilterCs.length}. List: ${firstNamesCs.join(', ')}`
                console.log(logFirstNamesCs)
                const fieldFilterSWE = parsedCsv.filter(element => element.field === 'SWE')
                const firstNamesSWE = fieldFilterSWE.map(element => element.firstname)
                const logFirstNamesSWE = `Number of students in SWE: ${fieldFilterSWE.length}. List: ${firstNamesSWE.join(', ')}`
                console.log(logFirstNamesSWE)
                const resolvedArray = [logNames, logFirstNamesCs, logFirstNamesSWE]
                resolve({
                    CS: firstNamesCs,
                    SWE: firstNamesSWE
                });
            } catch (error) {
                reject(new Error('Cannot load the database'));
            }
        });
    });
}

module.exports = readDatabase;