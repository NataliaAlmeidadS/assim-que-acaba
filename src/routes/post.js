
module.exports = router;
var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.post("/registrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    postController.registrar(req, res);
});

module.exports = router;