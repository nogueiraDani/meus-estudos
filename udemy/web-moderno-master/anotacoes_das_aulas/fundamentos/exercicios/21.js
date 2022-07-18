/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function calcularPlano (idade) {
    let valorBase = 100
    let valorCrianca = 80
    let valorJovem = 50
    let valorAdulto = 95
    let valorIdoso = 130


    if (idade > 0 && idade < 10) {
        return valorBase + valorCrianca
    } else if (idade >= 10 && idade < 30) {
        return valorBase + valorJovem
    } else if (idade >= 30 && idade < 60) {
        return valorBase + valorAdulto
    } else if (idade >= 60 ) {
        return valorBase + valorIdoso
    } 

}

function mostrarPlano(idade) {
    if (idade > 0 && idade < 100) {
        return `O valor do plano para ${String(idade).padStart(2, 0)} anos é R$${calcularPlano(idade).toFixed(2).replace(".", ",")}`
    } else {
        return `Valor inválido`
    }
}


console.log(mostrarPlano(25))
console.log(mostrarPlano(5))
console.log(mostrarPlano(55))
console.log(mostrarPlano(75))