/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
 */

let array = [130, 15, 150, 136, 645]


function primeiroEUltimoElemento(array) {
    const primeiro = array[0]
    const ultimo = array[(array.length - 1)]
    const novoArray = [primeiro, ultimo]
    return novoArray
}

console.log(primeiroEUltimoElemento(array))

// outra forma de fazer

let primeiro = array.find(elemento => elemento == array[0])
let ultimo = array.find(elemento => elemento == array[(array.length - 1)])
let resultado = [primeiro, ultimo]

console.log(resultado)

// ou assim:

function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
}

function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}