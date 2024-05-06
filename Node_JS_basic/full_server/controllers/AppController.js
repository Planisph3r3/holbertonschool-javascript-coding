// class

export default class AppController {

    static getHomepage(_, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello Holberton School!');
    }
}