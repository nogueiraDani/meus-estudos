/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calcularNovoSalario(salario, plano) {

    switch(plano.toUpperCase()) {
        case "A":
            return salario * 1.1
        case "B":
            return salario * 1.15
        case "C":
            return salario * 1.2
        default:
            return "Plano inválido"
    }
}

console.log((calcularNovoSalario(2000, "a").toFixed(2)))
console.log((calcularNovoSalario(3000, "B").toFixed(2)))
console.log((calcularNovoSalario(5526, "c").toFixed(2)))

console.log(calcularNovoSalario(2000, "d"))