var database = require("../database/config");

function post(mensagem, nome) {
    var instrucao = `
        INSERT INTO post (mensagem, nome) VALUES ('${mensagem}','${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    return database.executar(instrucao);
}
module.exports = {
    post
};