/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */

function simbolos(numero) {
    let resultado = ""
    for (let i = 0; i < numero; i++) {
        resultado += "+"
    }
    return resultado
}

console.log(simbolos(3))

// ou assim:

function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(3))