var titulo = document.querySelector('h1')
var instrucoes = document.querySelector('#instrucoes')
var aviso = document.querySelector('#aviso')
//var respostaEsta = document.querySelector('#respostaEsta')
var pontos = 0 // pontos para o placar
var placar = 0 // placar

// PERGUNTA
var numQuestao = document.querySelector('#numQuestao')
var pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')
var d = document.querySelector('#d')

// article com a class questoes
var articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
var alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual piloto detém o recorde de maior número de títulos mundiais na Fórmula 1?",
    alternativaA : "Ayrton Senna",
    alternativaB : "Lewis Hamilton",
    alternativaC : "Michael Schumacher",
    alternativaD : "Sebastian Vettel",
    correta      : "Michael Schumacher",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual equipe tem o recorde de maior número de títulos mundiais de construtores na Fórmula 1?",
    alternativaA : "Ferrari",
    alternativaB : "Mercedes",
    alternativaC : "McLaren",
    alternativaD :"Williams",
    correta      : "Ferrari",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quantas corridas compõem o calendário da temporada regular da Fórmula 1 atualmente?",
    alternativaA : "18",
    alternativaB : "20",
    alternativaC : "22",
    alternativaD : "24",
    correta      : "22",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o circuito mais longo do calendário da Fórmula 1?",
    alternativaA : " Spa-Francorchamps",
    alternativaB : "Circuit of the Americas",
    alternativaC : " Baku City Circuit",
    alternativaD : " Circuit de Monaco",
    correta      : "Spa-Francorchamps",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual piloto possui o maior número de vitórias em corridas na Fórmula 1?",
    alternativaA : "Ayrton Senna",
    alternativaB : "Lewis Hamilton",
    alternativaC : "Michael Schumacher",
    alternativaD : "Sebastian Vettel",
    correta      : "Lewis Hamilton",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual foi o primeiro piloto brasileiro a vencer um Grande Prêmio de Fórmula 1?",
    alternativaA : "Nelson Piquet",
    alternativaB : "Emerson Fittipaldi",
    alternativaC : "Rubens Barrichello",
    alternativaD : "Felipe Massa",
    correta      : "Emerson Fittipaldi",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual é o nome oficial do troféu concedido ao vencedor do campeonato de pilotos na Fórmula 1?",
    alternativaA : "Troféu Mundial de Pilotos",
    alternativaB : "Troféu da Coroa",
    alternativaC : "Troféu do Campeonato de Pilotos",
    alternativaD : "Troféu do Grande Prêmio",
    correta      : "Troféu Mundial de Pilotos",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é a equipe mais antiga ainda em atividade na Fórmula 1?",
    alternativaA : "Ferrari",
    alternativaB : "McLaren",
    alternativaC : "Mercedes",
    alternativaD : " Williams",
    correta      : "Ferrari",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual piloto detém o recorde de maior número de pole positions na Fórmula 1?",
    alternativaA : "Ayrton Senna",
    alternativaB : "Lewis Hamilton",
    alternativaC : "Michael Schumacher",
    alternativaD : "Sebastian Vettel",
    correta      : "Lewis Hamilton",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual piloto conquistou o primeiro campeonato mundial de Fórmula 1?",
    alternativaA : "Alberto Ascari",
    alternativaB : "Juan Manuel Fangio",
    alternativaC : "Nino Farina",
    alternativaD : "Stirling Moss",
    correta      : "Nino Farina",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

var numero = document.querySelector('#numero')
var total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

var totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPvarA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPvarA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    var numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    var respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    var certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    var pont = ''
    if (pontos == 0) {
        pont = 'ponto'
    }else {
        pont = 'pontos'
    }

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    console.log(pontos);
    var idUsuario = sessionStorage.ID_USUARIO

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

     setTimeout(function() {
         pontos = 0  //zerar placar
         window.location = "./dashboard.html";
     }, 2000)

    
}