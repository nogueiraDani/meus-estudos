/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

let criancas = [{
        nome: 'Ana',
        altura: 1.20,
        taxa: 5
    },
    {
        nome: 'Maria',
        altura: 1.50,
        taxa: 2
    }
]

let menorAltura
let maiorAltura

let crescimentoCriancaMenor
let crescimentoCriancaMaior

let criancaMenor
let criancaMaior

let alturasIguais = false
let crescimentosIguais = false

function descobrirMenor(crianca1, altura1, taxa1, crianca2, altura2, taxa2) {

    if (altura1 < altura2) {
        if (taxa1 == taxa2) {
            return menorAltura = altura1, criancaMenor = crianca1, maiorAltura = altura2, criancaMaior = crianca2, crescimentoCriancaMenor = taxa1, crescimentoCriancaMaior = taxa2, crescimentosIguais = true, alturasIguais = false
        } else {
            return menorAltura = altura1, criancaMenor = crianca1, maiorAltura = altura2, criancaMaior = crianca2, crescimentoCriancaMenor = taxa1, crescimentoCriancaMaior = taxa2
        }

    } else if (altura1 > altura2) {
        if (taxa1 == taxa2) {
            return menorAltura = altura2, criancaMenor = crianca2, maiorAltura = altura1, criancaMaior = crianca1, crescimentoCriancaMenor = taxa2, crescimentoCriancaMaior = taxa1, crescimentosIguais = true, alturasIguais = false
        }
    } else if (altura1 == altura2) {
        return alturasIguais = true

    }
}

function descobrirTempo() {

    let qtdAnos = 0

    while (menorAltura < maiorAltura) {
        menorAltura += (crescimentoCriancaMenor / 100)
        maiorAltura += (crescimentoCriancaMaior / 100)
        qtdAnos++
    }

    while (alturasIguais == true) {
        menorAltura += (crescimentoCriancaMenor / 100)
        maiorAltura += (crescimentoCriancaMaior / 100)
        qtdAnos++
        break
    }

    return qtdAnos
}

function mostrarResultados(crianca1, altura1, taxa1, crianca2, altura2, taxa2) {

    descobrirMenor(crianca1, altura1, taxa1, crianca2, altura2, taxa2)

    if (alturasIguais == true && crescimentosIguais == false) {
        if (crescimentoCriancaMenor > crescimentoCriancaMaior) {
            return console.log(`A ${criancaMenor} ultrapassará a altura de ${criancaMaior} em ${descobrirTempo()} ano(s).`)
        } else if (crescimentoCriancaMaior > crescimentoCriancaMenor) {
            return console.log(`A ${criancaMenor} não conseguirá ultrapassar a altura de ${criancaMaior}`)
        }
    }

    if (alturasIguais == false && crescimentosIguais == false) {
        if (crescimentoCriancaMenor > crescimentoCriancaMaior) {
            return console.log(`A ${criancaMenor} ultrapassará a altura de ${criancaMaior} em ${descobrirTempo()} ano(s).`)
        } else if (crescimentoCriancaMaior > crescimentoCriancaMenor) {
            return console.log(`A ${criancaMenor} não conseguirá ultrapassar a altura de ${criancaMaior}`)
        }
    } else if (alturasIguais == true && crescimentosIguais == true) {
        return console.log(`As alturas e taxas de ${crianca1} e ${crianca2} são iguais.`)
    }

    if (alturasIguais == false && crescimentosIguais == true) {
        return console.log(`A ${criancaMenor} não conseguirá ultrapassar a altura de ${criancaMaior}`)
    }
}

console.log(criancas)
mostrarResultados(criancas[0].nome, criancas[0].altura, criancas[0].taxa, criancas[1].nome, criancas[1].altura, criancas[1].taxa)

criancas[0].altura = 1.50
console.log(criancas)
mostrarResultados(criancas[0].nome, criancas[0].altura, criancas[0].taxa, criancas[1].nome, criancas[1].altura, criancas[1].taxa)

criancas[0].altura = 1.55
console.log(criancas)
mostrarResultados(criancas[0].nome, criancas[0].altura, criancas[0].taxa, criancas[1].nome, criancas[1].altura, criancas[1].taxa)

criancas[0].altura = 1.20
criancas[0].taxa = 2
console.log(criancas)
mostrarResultados(criancas[0].nome, criancas[0].altura, criancas[0].taxa, criancas[1].nome, criancas[1].altura, criancas[1].taxa)

criancas[0].altura = 1.50
console.log(criancas)
mostrarResultados(criancas[0].nome, criancas[0].altura, criancas[0].taxa, criancas[1].nome, criancas[1].altura, criancas[1].taxa)