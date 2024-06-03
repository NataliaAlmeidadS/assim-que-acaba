var postModel = require("../models/postModel");

function registrar(req, res) {
    var mensagem = req.body.mensagemServer;
   

    if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    }

    postModel.post(mensagem).then(function(mensagem){
        res.status(200).send("criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    registrar,
    
}