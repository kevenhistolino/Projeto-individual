var express = require("express");
var router = express.Router();

var PontoController = require("../controllers/PontoController");


router.get("/Pontos", function (req, res) {
    PontoController.Pontos(req, res);
});

router.get("/Construtores", function (req, res) {
    PontoController.Construtores(req, res);
});


module.exports = router;