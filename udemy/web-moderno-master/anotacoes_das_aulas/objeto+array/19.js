/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
 */

let valores = [7, 10, 15, 35, 60]

let media = valores.reduce((accum, val) => accum += val) / valores.length

console.log(media)

// ou assim:

function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for (numero of numeros) {
        somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}

function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / quantidadeDeNumeros
}