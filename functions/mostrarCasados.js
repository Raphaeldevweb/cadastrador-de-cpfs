const pessoas = require("./pessoas.json");

const casados = pessoas.filter((pessoa) => pessoa.casado);

console.table(casados);
