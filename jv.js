const prompt = require("prompt-sync")()
console.clear()



let PlayerScore1 = 0
let PlayerScore2 = 0

while (true) {


function titulo(){console.log("(◠‿◕)JOGO DA VELHA(◠‿◕)");
}
titulo();

function tutorial (){
    console.log();
    console.log(`
    Seja Bem Vindo ao Jogo da Velha
    ᕙ( ͡° ͜ʖ ͡°)ᕗ
    Antes começar uma rápida explicação no Jogo.
    Como Jogar:
    Escolha primeiro a COLUNA e depois a LINHA.
    FICA ASSIM <=> PLAY1 = A1 B1 C1...
                   PLAY2 = A2 B2 C2...
    
    TENHAM UM BOM DIVERTIMENTO!!!
    `)
    console.log();
    console.log();
    console.log();
    }
    tutorial();

const intro = prompt("(☞ ͡° ͜ʖ ͡°)☞ Vamos começar a jogar!!! \nPressione [ENTER] para iniciar o jogo.")

console.log()

let leading =  [0, "A", "B", "C"]
let matriz1 =  [1,"_","_","_"]
let matriz2 = [2,"_","_","_"]
let matriz3 = [3,"_","_","_"]
let matriz4 = []
let player1 = ''
let player2 = ''
let review

let query = prompt('PLAYER SELECIONE "O" ou "X"  ')
matriz4.push(leading)
matriz4.push(matriz1)
matriz4.push(matriz2)
matriz4.push(matriz3)

console.log()

function display () {

    console.clear()
    matriz4.push(leading)
    matriz4.push(matriz1)
    matriz4.push(matriz2)
    matriz4.push(matriz3)


    console.log(matriz4[0])
    console.log()
    console.log(matriz4[1])
    console.log()
    console.log(matriz4[2])
    console.log()
    console.log(matriz4[3])
}
display()


console.log()
console.log()


function player(plays) {

    let mark = query == "x" ? "x" : "o"

if (plays == "a1") {

    matriz1.splice(1,1, mark)
}

else if (plays == "a2") {

    matriz2.splice(1,1, mark)

}
else if (plays == "a3") {

    matriz3.splice(1,1, mark)
}
else if (plays == "b1") {

    matriz1.splice(2,1,mark)
}

else if (plays == "b2") {

    matriz2.splice(2,1,mark)
}

else if (plays == "b3") {

    matriz3.splice(2,1,mark)
}

else if (plays == "c1") {

    matriz1.splice(3,1,mark)
}

else if (plays == "c2") {

    matriz2.splice(3,1,mark)
}

else if (plays == "c3") {

    matriz3.splice(3,1,mark)
}

}

player(player1)
display()
console.log()

function playerTwo(plays) {

    let mark = query == "x" ? "o" : "x"

if (plays == "a1") {

    matriz1.splice(1,1, mark)
}

else if (plays == "a2") {

    matriz2.splice(1,1, mark)
}

else if (plays == "a3") {

    matriz3.splice(1,1, mark)
}

else if (plays == "b1") {

    matriz1.splice(2,1,mark)
}

else if (plays == "b2") {

    matriz2.splice(2,1,mark)
}

else if (plays == "b3") {

    matriz3.splice(2,1,mark)
}

else if (plays == "c1") {

    matriz1.splice(3,1,mark)
}

else if (plays == "c2") {

    matriz2.splice(3,1,mark)
}

else if (plays == "c3") {

    matriz3.splice(3,1,mark)
}

}

playerTwo(player2)
display()

console.log()

for (let i = 0; i < 20; i++) {

player1 = prompt("PLAYER 1: ESCOLHA A COLUNA E LINHA ")
console.log()
review = check(player1)
while (review == false) {
    console.log('Coluna e Linha já preenchido')
    console.log()
    player1 = prompt("PLAYER 1: ESCOLHA A COLUNA E LINHA ")
    review = check(player1)
    }
    
    player(player1)

display()
if (CountPlayerO() == true) {
    break
}

if (CountPlayerx() == true) {
    break
}

if (empate() == true) {
    break
}

console.log()

player2 = prompt("PLAYER 2: ESCOLHA A COLUNA E LINHA  ")
console.log()
review = check(player2)
while (review == false) {
    console.log('Coluna e Linha já preenchido')
    console.log()
    player2 = prompt("PLAYER 2: ESCOLHA A COLUNA E LINHA  ")
    review = check(player2)
    }
  
    playerTwo(player2)

display()  
if (CountPlayerx() == true) {
    break
}

if (CountPlayerO() == true) {
    break
}

if (empate() == true) {
    break
}

}

console.log()

function CountPlayerx () {

if (matriz1[1] == "x" && matriz1[2] == 'x' && matriz1[3] == 'x') {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz2[1] == "x" && matriz2[2] == 'x' && matriz2[3] == 'x') {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz3[1] == "x" && matriz3[2] == 'x' && matriz3[3] == 'x') {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz1[1] == "x" && matriz2[2] == "x" && matriz3[3] == "x") {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz3[1] == "x" && matriz2[2] == "x" && matriz1[3] == "x") {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz1[1] == "x" && matriz2[1] == "x" && matriz3[1] == "x") {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz1[2] == "x" && matriz2[2] == "x" && matriz3[2] == "x" ) {
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}

if (matriz1[3] == "x" && matriz2[3] == "x" && matriz3[3] == "x"){
    console.log()
    console.log('Player "x" ganhou!!!')
    if (query == "x") {
        PlayerScore1++
    } else {
        PlayerScore2++
    }
    return true
}
}

console.log()

function CountPlayerO () {
    if (matriz1[1] == "o" && matriz1[2] == 'o' && matriz1[3] == 'o') {
        console.log()
        console.log('Player "O" ganhou!!!')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz2[1] == "o" && matriz2[2] == 'o' && matriz2[3] == 'o') {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz3[1] == "o" && matriz3[2] == 'o' && matriz3[3] == 'o') {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz1[1] == "o" && matriz2[2] == "o" && matriz3[3] == "o") {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz3[1] == "o" && matriz2[2] == "o" && matriz1[3] == "o") {
        console.log()
        console.log('O Jogador "o" ganhou')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz1[1] == "o" && matriz2[1] == "o" && matriz3[1] == "o") {
        console.log()
        console.log('Player "O" ganhou!!!')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz1[2] == "o" && matriz2[2] == "o" && matriz3[2] == "o" ) {
        console.log()
        console.log('Player "O" ganhou!!!')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
    
    if (matriz1[3] == "o" && matriz2[3] == "o" && matriz3[3] == "o"){
        console.log()
        console.log('Player "O" ganhou!!!')
        if (query == "o") {
            PlayerScore1++
        } else {
            PlayerScore2++
        }
        return true
    }
}

console.log()

function check(seeGame) {

if (seeGame == 'a1') {
    if (matriz1[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'a2') {
    if (matriz2[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'a3') {
    if (matriz3[1] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'b1') {
    if (matriz1[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'b2') {
    if (matriz2[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'b3') {
    if (matriz3[2] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'c1') {
    if (matriz1[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'c2') {
    if (matriz2[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

else if (seeGame == 'c3') {
    if (matriz3[3] != "_" ) {
        return false
    }
    else {
        return true
    }
}

}

console.log()

function empate() {

    if (matriz1[1] != "_" && matriz1[2] != "_" && matriz1[3] != "_" && matriz2[1] != "_" && matriz2[2] != "_" && matriz2[3] != "_" && matriz3[1] != "_" && matriz3[2] != "_" && matriz3[3] != "_" ) {
        console.log('Empate')
         return true
    }
 
    else {

        return false
    }
}

console.log(`Player 1 = ${PlayerScore1} pontos.`)
console.log(`Player 2 =  ${PlayerScore2} pontos.`)

cleanPoints = prompt('Limpar pontuação? (sim: para limpar ou não: Para deixar a pontuação) ')

if (cleanPoints == "sim" || cleanPoints == "s") {
    PlayerScore1 = 0
    PlayerScore2 = 0
}

let finish = prompt('Deseja jogar novamente? ')
console.clear()

if (finish == "sim" || finish == "s")
{
    continue
}
else {
    console.log("FIM DO JOGO ┐( ˘_˘)┌")
    console.log("OBRIGADO POR JOGAR (◠‿◕)");
    break
}

}
