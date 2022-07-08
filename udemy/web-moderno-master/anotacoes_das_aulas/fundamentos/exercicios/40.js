/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function classificacao(nota) {
    let valor = nota
    if (valor < 0 || valor > 10) {
        return console.log(`Nota inválida`)
    } else if (valor >= 0 && valor <= 4.9) {
        return console.log(`nota D`)
    } else if (valor >= 7 && valor <= 8.9) {
        return console.log(`nota B`)
    } else if (valor >= 9 && valor <= 10) {
        return console.log(`nota A`)
    }
}

classificacao(3.2)
classificacao(7.5)
classificacao(-1.2)
classificacao(11)