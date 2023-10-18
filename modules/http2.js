const http = require('node:http');

const port = 3330;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  return res.end('Hello world');
})

server.listen(port);