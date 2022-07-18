/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/
let numericos = [1.2, 2.3, 3.4]
let inteiros = [1, 2, 3]

function multiplicar(valor1, valor2) {
    let resultados = []
    for (let i = 0; i < valor2.length; i++) {
        resultados.push(valor1[i] * valor2[i])
    }
    return resultados
}

function multiplicarAcimaDeCinco(valor1, valor2) {
    let valores = multiplicar(valor1, valor2)
    let resultados = []
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > 5) {
            for (let j = 0; j < valor2.length; j++) {
                resultados.push((valores[i] * valor2[j]).toFixed(2))
            }
            return resultados
        }
    }
}

console.log(multiplicarAcimaDeCinco(numericos, inteiros))