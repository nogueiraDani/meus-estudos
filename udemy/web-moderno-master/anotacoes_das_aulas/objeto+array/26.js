/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
 */

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}

console.log(removerVogais("Amor"))

// ou assim:

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}