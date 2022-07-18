/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repetir(numero1, numero2) {
    let resultado = []
    for (let i = 0; i < numero2; i++) {
        resultado.push(numero1)
    }
    return resultado
}

console.log(repetir(3, 5))

// ou assim:

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}