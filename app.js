const pessoas = require("./pessoas.json");
const fs = require("fs");

const nome = process.argv[2];
const cpf = process.argv[3];
const casado = process.argv[4] == "1";
const filhos = process.argv.slice(5);

const pessoa = {
  nome: nome,
  cpf: cpf,
  casado: casado,
  filhos: filhos,
};

pessoas.push(pessoa);

console.log(pessoas);

fs.writeFileSync("pessoas.json", JSON.stringify(pessoas, null, 4));

console.log("oi");

// Passo 1: Capturar: nome, cpf, casado, filhos do terminal
// e guardar em variáveis de mesmos nomes

// Passo 2: Criar um objeto com essas informações

// Passo 3: Adicionar o objeto criado ao array pessoas

// Passo 4: Salvar o array de pessoas no arquivo pessoas.json
// fs.writeFileSync("./pessoas.json", PESSOAS + "\n");
// Passo 5: Mostrar o array de pessoas no formarto de tabela
