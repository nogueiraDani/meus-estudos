/* Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

function mostrarNumerosPares(numeroInicial, numeroFinal) {

    let contador = numeroInicial
    let numeroParaExibir = numeroInicial

    while (contador < numeroFinal) {
        if (numeroParaExibir % 2 == 0) {
            console.log(numeroParaExibir)
            numeroParaExibir ++
            contador ++
        } else {
            numeroParaExibir ++
            contador ++
        }
    }
    
}

mostrarNumerosPares(1, 100)
mostrarNumerosPares(7, 53)