/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

let contador10a20 = 0
let contadorOutros = 0

function contar(lista) {

    for (i = 0; i < lista.length; i++) {
        if (lista[i] >= 10 && lista[i] <= 20) {
            contador10a20++
        } else {
            contadorOutros++
        }
    }
    return console.log(`Dentro do intervalo de ${lista[0]} e ${lista[lista.length - 1]},  ${contador10a20} estao entre 10 a 20, ${contadorOutros} nao estao entre 10 a 20.`)

}
let lista = [1, 2, 3, 5, 10, 11, 12, 13, 15, 18, 20, 22, 25, 26, 27, 30]

contar(lista)