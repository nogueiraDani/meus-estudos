/* Escrever um programa para exibir os números de 1 até 50 na tela. */

function mostrarNumeros (numeroInicial, numeroFinal) {
    let contador = 1
    let numeroParaExibir = numeroInicial
    while (contador <= numeroFinal){
        console.log(numeroParaExibir)
        numeroParaExibir ++
        contador ++
    }
}

mostrarNumeros(1, 15)