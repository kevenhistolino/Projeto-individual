var database = require("../database/config")

function Equipes() {
    var instrucao = `
    SELECT Equipe.nome,COUNT(*) AS Votos
    FROM Cadastro join Equipe on Voto_equipe = id_equipe
    GROUP BY Voto_equipe;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function PostarPonto(user, ponto) {

    instrucaoSql = `INSERT INTO quiz VALUES (NULL, ${ponto}, ${user}); `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function PegarValores() {

    instrucaoSql = `select nome, sum(pontos) as pto from quiz join Cadastro on fk_cadastro_quiz = idUsuario group by nome order by pto desc limit 10;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
Equipes,
PostarPonto,
PegarValores
};