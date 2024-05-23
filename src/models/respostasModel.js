var database = require("../database/config");

function cadastrar(acertos) {
    var instrucao = `
        INSERT INTO quiz (pontuacao) VALUES ('${acertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    return database.executar(instrucao);
}