/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

function contarCaracter(caracter, frase) {
    let array = Array.from(frase)
    let contador = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === caracter) {
            contador++
        }
    }
    return contador
}

console.log(contarCaracter("r", "O rato roeu a roupa do Rei"))

// ou assim:

function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++
    return contador
}

function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}