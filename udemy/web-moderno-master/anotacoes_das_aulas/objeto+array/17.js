/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

let array = [1, 35, 70, 152, 359]

let soma = array.reduce(function (acumulador, atual) {
    return acumulador + atual
}, 0)

console.log(soma)

// ou assim:

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros(numeros) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}