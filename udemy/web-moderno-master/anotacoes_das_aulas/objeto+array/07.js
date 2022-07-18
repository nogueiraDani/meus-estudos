/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
 */

function descobrirInclusivo(minimo, numero, maximo, inclusivo) {
    if (numero > minimo && numero < maximo && inclusivo == undefined) {
        return true
    } else if (numero >= minimo && numero <= maximo && inclusivo == true) {
        return true
    } else {
        return false
    }
}

console.log(descobrirInclusivo(10, 50, 100))
console.log(descobrirInclusivo(10, 100, 110))
console.log(descobrirInclusivo(10, 10, 100))
console.log(descobrirInclusivo(10, 10, 100, true))


// ou assim: 

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}