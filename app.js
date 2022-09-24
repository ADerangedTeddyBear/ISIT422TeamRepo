const http = require('http');
var fs = require('fs'); 
const url = require("url");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); 

  let parsedURL = url.parse(req.url, true);
  let path = parsedURL.pathname;

  let urlString = (path === "/") ? "./index.html" : `.${path}.html`;

  fs.readFile(urlString, null, function(error, data) {  
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
