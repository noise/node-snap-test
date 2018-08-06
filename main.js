#!/usr/bin/env node

const http = require('http');
const PORT = 8082;

function handleRequest(request, response){
    response.writeHeader(200, {"Content-Type": "application/json"});
    response.end('{"hello": "world"}');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
