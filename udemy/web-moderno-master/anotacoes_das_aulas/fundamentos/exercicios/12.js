/*Faça um algoritmo que calcule o fatorial de um número.
*/

//isso aqui em baixo parece uma callback

function calcularFatorial (numero) {
    if (numero === 0) {
        return 1
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

calcularFatorial(10)