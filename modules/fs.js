const fs = require('fs');
const path = require('path');

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test') , (Error) => {
//   if(Error){
//     return console.log('Erro: ', Error);
//   }
//   console.log('Pasta criada com sucesso!');
// });

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'html.txt'),
'Hello Node!', (Error) => {
  if(Error){
    return console.log('Erro: ', Error);
  }
  console.log('arquivo criado com sucesso!'); 
  
  
// Adicionar conteudo a um arquivo
fs.appendFile(path.join(__dirname, '/test', 'html.txt'),
' Hello world', (Error) => {
  if(Error){
    return console.log('Erro: ', Error);
  }
  console.log('Conteudo adicionado com sucesso!');
})

fs.readFile(path.join(__dirname, '/test', 'html.txt'),
 'utf8', (Error, data) => {
  if(Error){
    return console.log('Error: ', Error);
  };

  console.log(data);
})
} )
