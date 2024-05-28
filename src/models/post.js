var database = require("../database/config");

function post(mensagem) {
    var instrucao = `
        INSERT INTO post (nome,mensagem)) VALUES ('${mensagem}','${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    return database.executar(instrucao);
}