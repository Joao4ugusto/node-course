const http = require('node:http');

const port = '8080';

const server = http.createServer((req, res) => {
  if(req.url === '/home'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Home page</h1>');
  }
  if(req.url === '/users'){
    const users = [
      {
        name: 'João',
        age: 20,
      },
      {
        name: 'Augusto',
        age: 21,
      }
    ]

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(users));
  }
})

server.listen(port, () => console.log(`rodando na porta ${port}`));