/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

function maiorOuIgual(numero1, numero2) {
    if (numero1 >= numero2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(1, 2))
console.log(maiorOuIgual(2, 1))

// ou assim: 

function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

console.log(maiorOuIgual(1, 2))
console.log(maiorOuIgual(2, 1))
console.log(maiorOuIgual("2", 1))