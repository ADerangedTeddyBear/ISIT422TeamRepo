const http = require('http');
var fs = require('fs'); //NEW* - File System module
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); //Changed 'text/plain' to 'text/html

  fs.readFile('./index.html', null, function(error, data) {  //added 'index.html' as landing page
    if (error){
        res.writeHead(404);
        res.write('File not found!');
    }else{
        res.write(data);
    }
    res.end();
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/* PREVIOUS CODE 9/24/2022
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/