/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function media(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i]
    }

    let total = (soma / lista.length).toFixed(2)
    

    return console.log(`A média entre os ${lista.length} numéros é ${total}`)
}

let lista = [5, 3, 5, 10, 15, 20, 35, 58, 5]

media(lista)