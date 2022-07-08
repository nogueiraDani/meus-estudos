/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento: */

let obj = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])
    return resultado
}

console.log(objetoParaArray(obj))

// ou assim:

function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map(chave => [chave, objeto[chave]])
    return resultado
}

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}