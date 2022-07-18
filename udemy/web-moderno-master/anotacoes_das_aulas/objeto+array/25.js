/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
 */

function filtrar(str, array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(str)) {
            result.push(array[i])
        }
    }
    return result
}

console.log(filtrar("amor", ["amoreira", "sabado", "amortecedor", "domingo"]))

// ou assim:

function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}