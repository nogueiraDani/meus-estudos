/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

let vetorInteiro = [2, 5, 9, 65]
let vetorString = ["Joao", "Maria", "Anna", "José"]
let vetorDouble = [2.5, 3.87, 9.56, 12.56]

function concatenar(...args) {
    let resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorDouble, vetorString))