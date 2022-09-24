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


  let paths = [ '/', '/ian-beard.html', '/eric-sergio.html', '/thaianhvu', '/chitalumumba' ];
  let pathnames = ['./index.html', './ian-beard.html', './eric-sergio.html', './thaianh-vu.html', './chitalu-mumba.html' ];

  for(p in paths){
    if (path === paths[p]) {
      fs.readFile(pathnames[p], null, function(error, data) {
        if(error) {
          res.writeHead(404);
          res.write('File Not Found');
        } else {
          res.write(data)
        }
        res.end();
      })
    }
  }

  /*if (path === '/'){    
    fs.readFile('./index.html', null, function(error, data) {  
      if (error){
          res.writeHead(404);
          res.write('File not found!');
      }else{
          res.write(data);
      }
      res.end();
    })
  }
  else if (path === '/ianbeard'){
    fs.readFile('./ian-beard.html', null, function(error, data) {  
      if (error){
          res.writeHead(404);
          res.write('File not found!');
      }else{
          res.write(data);
      }
      res.end();
    })
  }
  else if (path === '/ericsergio'){
    fs.readFile('./eric-sergio.html', null, function(error, data) {  
      if (error){
          res.writeHead(404);
          res.write('File not found!');
      }else{
          res.write(data);
      }
      res.end();
    })
  }
  else if (path === '/thaianhvu'){
    fs.readFile('./thaianh-vu.html', null, function(error, data) {  
      if (error){
          res.writeHead(404);
          res.write('File not found!');
      }else{
          res.write(data);
      }
      res.end();
    })
  } else if (path === '/chitalumumba'){
    fs.readFile('./chitalu-mumba.html', null, function(error, data) {  
      if (error){
          res.writeHead(404);
          res.write('File not found!');
      }else{
          res.write(data);
      }
      res.end();
    })
  }*/
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
