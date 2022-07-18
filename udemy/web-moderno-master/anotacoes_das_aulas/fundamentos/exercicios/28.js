/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function contarPares(numeroInicial, numeroFinal) {
    let totalPares = 0
    while (numeroInicial < numeroFinal) {
        if (numeroInicial % 2 == 0) {
            numeroInicial ++
            totalPares++
        } else {
            numeroInicial ++
        }
    }
    return totalPares
}

function contarImpares(numeroInicial, numeroFinal) {
    let totalImpares = 0
    while (numeroInicial < numeroFinal) {
        if (numeroInicial % 2 == 0) {
            numeroInicial ++
        } else {
            totalImpares++
            numeroInicial ++
        }
    }
    return totalImpares
}

console.log(`O total de pares entre 1 e 10 é: ${contarPares(1, 10)}. O total de impares entre 1 e 100 é: ${contarImpares(1, 10)}`)