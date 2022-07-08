/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function mostrarOperacoes(a, b) {

    let resultadoSoma = a + b
    let resultadoSubtracao = a - b
    let resultadoMultiplicacao = a *b
    let resultadoDivisao = a / b 

    return console.log(`A soma entre ${a} e ${b} é: ${resultadoSoma}. A subtração entre ${a} e ${b} é: ${resultadoSubtracao}. A multiplicação entre ${a} e ${b} é: ${resultadoMultiplicacao}. A divisao entre ${a} e ${b} é: ${resultadoDivisao}.`)
}

mostrarOperacoes(2,10)
mostrarOperacoes(52, 15)
mostrarOperacoes(152, 78)