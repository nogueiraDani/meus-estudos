/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
 */

function converterIdadeEmDias(idade) {
    let resultado = 0
    for (let i = 0; i < idade; i++) {
        resultado += 365
    }
    return resultado
}

console.log(converterIdadeEmDias(25))

// outra forma de fazer 

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}