var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    respostasController.cadastrar(req, res);
});

module.exports = router;