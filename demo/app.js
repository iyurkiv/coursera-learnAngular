const http = require('http');

const server = http.createServer( (request,response) => {
    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<h1>Welcome to Node.js</h1>');

});

server.listen(3000, ()=>console.log("http://localhost:3000"));