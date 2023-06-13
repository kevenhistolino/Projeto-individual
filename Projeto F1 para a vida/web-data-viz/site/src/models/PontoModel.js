var database = require("../database/config")

function Pontos() {
    var instrucao = `
    select Piloto.nome, status_piloto.pontos from 
    Piloto join status_piloto on fkPiloto = idPiloto;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Construtores() {
    var instrucao = `
    select nome, Pontuacao_equipe as Pontos_Construtores from Equipe;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    Pontos,
    Construtores
};