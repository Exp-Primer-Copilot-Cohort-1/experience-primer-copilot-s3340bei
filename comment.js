// Create web server
// 1. Create a web server
// 2. Read the file
// 3. Send the file to the client
// 4. End the response

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // 2. Read the file
    // const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, 'utf-8');
    // const objData = JSON.parse(data);
    // console.log(objData);
    // 3. Send the file to the client
    // res.end(objData[0].name);
    // 4. End the response
    // res.end('Hello from the other side');
    // console.log(req.url);
    if (req.url == '/') {
        res.end('Hello from the other side');
    } else if (req.url == '/about') {
        res.end('Hello from the about side');
    } else if (req.url == '/contact') {
        res.end('Hello from the contact side');
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>404 error page. Page does not exist</h1>');
    }
});

// 2. Listen to the server
server.listen(8000, '',"");