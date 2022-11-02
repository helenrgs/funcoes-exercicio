// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function callMyName(seuNome) {
    seuNome = prompt("Coloque seu nome AQUI")
    console.log(`Olá, ${seuNome}!`)
}
callMyName()

// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. 
// Chame esta função várias vezes com números diferentes.

function tabuada(numero){

    console.log(
        numero*0,
        numero*1,
        numero*2,
        numero*3,
        numero*4,
        numero*5,
        numero*6,
        numero*7,
        numero*8,
        numero*9,
        numero*10
    )
}
tabuada(2)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função
// ou __arrow functions__ 

const callMyName = (seuNome) => {
    console.log(`Olá, ${seuNome}`)
}
callMyName('Helen')

const tabuada = (numero)=>{
    console.log(
        numero*0,
        numero*1,
        numero*2,
        numero*3,
        numero*4,
        numero*5,
        numero*6,
        numero*7,
        numero*8,
        numero*9,
        numero*10
    )
}
tabuada(2)
