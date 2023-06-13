var express = require("express");
var router = express.Router();

var EquipeController = require("../controllers/EquipeController");

router.get("/Equipes", function (req, res) {
    EquipeController.Equipes(req, res);
});


module.exports = router;