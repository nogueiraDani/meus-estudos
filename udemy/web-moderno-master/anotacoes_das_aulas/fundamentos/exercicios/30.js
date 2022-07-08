/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

function descobrirValores (lista) {
    let valorMenor = lista[0]
    let valorMaior = lista[0]

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < valorMenor) {
            valorMenor = lista[i]
        } else if (lista[i] > valorMaior) {
            valorMaior = lista[i]
        }
    }

    return console.log(`Dentre os ${lista.length} numeros, o maior é ${valorMaior} e o menor é ${valorMenor}`)
}

let lista = [5, 3, 4, 8, 10, 15, 22, 23, 16, 18, 32, 2]

descobrirValores(lista)