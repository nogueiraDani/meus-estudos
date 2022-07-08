/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function descobrirDivisivelPorTres(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

descobrirDivisivelPorTres(9)
descobrirDivisivelPorTres(8)