/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 */

let frase = "Sou uma frase"

function contarPalavras(frase){
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(contarPalavras(frase))
