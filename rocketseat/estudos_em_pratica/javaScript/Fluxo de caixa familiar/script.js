let orcamentoFamiliar = {
    receitas:[1500, 3200, 250.50, 310.50],
    despesas:[1500, 360.50, 180.50, 290.50]
}


function soma(array) {
    let total = 0;

    for (let valor of array) {
        total += valor
    }

    return total
}

function calcularBalanco() {
    let totalBalanco

    const calculoReceitas = soma(orcamentoFamiliar.receitas)
    const calculoDespesas = soma(orcamentoFamiliar.despesas)

    totalBalanco = calculoReceitas - calculoDespesas
    return totalBalanco
}

function mensagemResultado(){
    const saldoVermelho = calcularBalanco() < 0

    let mensagemBalanco = "positivo"

    if (saldoVermelho) {
        mensagemBalanco = "negativo"
    }

    console.log(`Seu saldo está ${mensagemBalanco}: R$ ${calcularBalanco().toFixed(2)}`)
}

mensagemResultado()
