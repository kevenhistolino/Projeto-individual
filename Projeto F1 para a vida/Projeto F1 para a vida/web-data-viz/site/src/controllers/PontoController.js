var PontoModel = require("../models/PontoModel");

function Pontos(req, res) {

    PontoModel.Pontos(req,res).then(function (resultado) {
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

function Construtores(req, res) {

    PontoModel.Construtores(req,res).then(function (resultado) {
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

module.exports = {
    Pontos,
    Construtores
}