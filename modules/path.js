const path = require('path');

// Mostrar o nome da pasta
console.log(path.basename(__filename));
// Mostra o diretório atual
console.log(path.dirname(__filename));
// Mostra a extensão do arquivo
console.log(path.extname(__filename));
// Cria um objeto com informações do path
console.log(path.parse(__filename));
// juntar caminhos de arquivos 
console.log(__dirname);
console.log(path.join(__dirname, 'tast', 'test.html'));