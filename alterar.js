const pessoas = require("./pessoas.json");
const fs = require("fs");

const nome = process.argv[2];
const cpf = process.argv[3];
const casado = process.argv[4] == "1";
const filhos = process.argv.slice(5);

fs.writeFileSync("pessoas.json", JSON.stringify(pessoas, null, 4));
