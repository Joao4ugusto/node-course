const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.writeHead('application/html');
  res.status(200).send(`
  <div>
  <h1>Hello world!!</h1>
  <div>
  `)
})

app.get('/users', (req, res) => {
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

  res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando servidor na porta ${port}`));