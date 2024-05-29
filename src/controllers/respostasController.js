var respostasModel = require("../models/respostasModel");

function cadastrar(req, res) {
    var acertos = req.body.acertosServer;

    if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    }

    respostasModel.cadastrar(acertos).then(function(resposta){
        res.status(200).send("criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}