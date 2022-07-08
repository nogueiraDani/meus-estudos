/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */ 

function descobrirNegativos (lista) {
    let negativos = 0
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] < 0) {
            negativos++
        }
    }

    return console.log(`Dentre os ${lista.length} números, ${negativos} sao negativos`)
}

let lista = [0, 5, -2, -2, -3, 5, 7, -12, -13, 15]

descobrirNegativos(lista)