/* Criar uma função que receba um array de números e retorne o menor número desse array. */


let array = [2, 10, 15, 7, 1, 0]

function oMenor(lista) {
    let num = 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < num) {
            num = lista[i]
        }
    }
    return num
}
console.log(oMenor(array))

// ou assim:

function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero(numeros) {
    return Math.min(...numeros);
}