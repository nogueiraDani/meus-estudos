/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
 */

function adivinhe(num) {
    let numRandom = (Math.random() * 11).toFixed(0)
    if (num == numRandom) {
        return "Parabéns, acertou! " + numRandom
    } else {
        return "Erro! " + numRandom
    }
}

console.log(adivinhe(5))

// ou assim:

/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

function funcaoDaSorte(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return (numeroEscolhido === numeroAleatorio ?
        `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
        `Que pena, o número sorteado foi o ${numeroAleatorio}`
    )
}