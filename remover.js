// capturar o número digitado pelo usuário

const numero = process.argv[2];

// importar array de pessoas

const pessoas = require("./pessoas.json");
const fs = require("fs");

// remover a pessoa da posição desejada

pessoas.splice(numero, 1);

// salvar o array modificado ( sem a pessoa) no arquivo)

fs.writeFileSync("./pessoas.json", JSON.stringify(pessoas, null, 4));
