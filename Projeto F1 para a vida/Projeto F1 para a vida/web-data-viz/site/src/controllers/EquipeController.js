var EquipeModel = require("../models/EquipeModel");

function Equipes(req, res) {

    EquipeModel.Equipes(req,res).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas Equipes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function PostarPonto(req, res) {
    var user = req.body.idServer
    var ponto = req.body.pontosServer
    console.log("cheguei aqui roteador");
    EquipeModel.PostarPonto(user, ponto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    Equipes,
    PostarPonto
}