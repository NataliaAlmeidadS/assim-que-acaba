var respostasModel = require("../models/postsModel");

function registrar(req, res) {
    var mensagem = req.body.mensagemServer;

    if (mensagem == undefined) {
        res.status(400).send("Seus mensagem está undefined!");
    }

    postModel.cadastrar(mensagem).then(function(mensagem){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrar
}