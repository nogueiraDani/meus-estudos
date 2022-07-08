/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */

let lista = [1, 2, 3, 15, 5, 6, 7, 17, 9, 10]

function pares(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result.push(array[i])
        } else if (array[i] % 2 === 0) {
            result.push(array[i])
        }
    }
    return result
}

console.log(pares(lista))

// ou assim:

function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for (let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 === 0
        if (numeroPar)
            resultado.push(numeros[i])
    }
    return resultado
}

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}