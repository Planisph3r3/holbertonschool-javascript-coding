import readDatabase from '../utils';

export default class StudentsController {
    static getAllStudents(_, response) {
        const inputDatabase = process.argv[2] !== undefined ? process.argv[2] : '';
        readDatabase(inputDatabase)
            .then(data => {
                let tempArray = []
                for (const field in data) {
                    if (data.hasOwnProperty(field)) {
                      const numberOfStudents = data[field].length;
                      const listOfFirstNames = data[field].join(', ');
                      const dataLog = `Number of students in ${field}: ${numberOfStudents}. List: ${listOfFirstNames}`;
                      tempArray.push(dataLog)
                    }
                  }
                response.status(200).send(`This is the list of our students\n${tempArray.join('\n')}`)
            })
            .catch(error => {
                console.error(error);
                response.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(request, response) {
        const inputDatabase = process.argv[2] !== undefined ? process.argv[2] : '';
        const { major } = request.params;
        if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        }
        readDatabase(inputDatabase)
            .then(data => {
                if (major === 'CS') {
                    const csStudents = data['CS'];
                    const numberOfStudents = csStudents.length;
                    const listOfFirstNames = csStudents.join(', ');
                    const formattedString = `Number of students in CS: ${numberOfStudents}. List: ${listOfFirstNames}`;
                    response.status(200).send(`${formattedString}`);
                } else if (major === 'SWE') {
                    const sweStudents = data['SWE'];
                    const numberOfStudents = sweStudents.length;
                    const listOfFirstNames = sweStudents.join(', ');
                    const formattedString = `Number of students in SWE: ${numberOfStudents}. List: ${listOfFirstNames}`;
                    response.status(200).send(`${formattedString}`);
    }})
            .catch(error => {
                console.error(error);
                response.status(500).send('Cannot load the database');
            });
    }
}