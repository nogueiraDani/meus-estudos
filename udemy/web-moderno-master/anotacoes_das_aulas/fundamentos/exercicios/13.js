/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function descobrirDiaDasemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"

        default:
            return "Dia inválido"

    }
}

console.log(descobrirDiaDasemana(1))
console.log(descobrirDiaDasemana(3))
console.log(descobrirDiaDasemana(8))