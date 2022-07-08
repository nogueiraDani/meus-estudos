/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores */

function calcular(numero1, numero2, operacao) {
    switch (Number.numero1, Number.numero2, operacao) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default:
            return "dados invalidos"
    }
}

console.log(calcular(2, 3, "+"))
console.log(calcular(2, 3, "-"))
console.log(calcular(2, 3, "*"))
console.log(calcular(2, 3, "/"))
console.log(calcular(2, 3, "a"))