/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function jurosCompostos(valorInicial, juros, tempo) {
    return valorInicial * Math.pow((1 + juros), tempo)
}

function calcularAnuidade(mes, anuidade) {

    switch (mes) {
        case 1:
            return anuidade
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
           return jurosCompostos(anuidade, 0.05, (mes - 1))

        default:
            return "Dados Inválidos"

    }
}

function mostrarAnuidade(mes, anuidade) {
    return console.log(`Para o pagamento no mes ${mes}, o valor da anuidade é R$${calcularAnuidade(mes, anuidade).toFixed(2).replace(".", ",")}`)
}

mostrarAnuidade(11, 500)
