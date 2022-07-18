/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */

function multiplicar(numero1, numero2) {
    let resultado = 0
    for (let i = 0; i < numero2; i++) {
        resultado += numero1
    }
    return resultado
}

console.log(multiplicar(2, 3))

// ou assim:

function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador - 1)
}

function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            numero :
            numero + multiplicarRecursivamente(numero, multiplicador - 1)
        )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}