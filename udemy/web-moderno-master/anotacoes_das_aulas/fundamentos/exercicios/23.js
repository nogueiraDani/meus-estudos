/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

let resultado2022 = {
        aluno: "João",
        notas: [55, 85, 90]
    }


function calcularMediaPonderada(nota1, nota2, nota3) {
    return ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
}

function resultadoPorAluno(aluno, notas) {

    let mediaPonderada = Math.round(calcularMediaPonderada(notas[0], notas[1], notas[2]))

    if (mediaPonderada >= 60) {
        return console.log(`Parabéns ${aluno}, você foi aprovado com a nota ${mediaPonderada}`)
    } else {
        return console.log(`Infelizmente ${aluno}, você foi reprovado, sua nota foi${mediaPonderada}`)
    }

}

resultadoPorAluno(resultado2022.aluno, resultado2022.notas)