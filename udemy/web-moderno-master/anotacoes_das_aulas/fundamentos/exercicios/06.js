/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */


function simpleInterest(startingCapital, interestRate, applicationTime) {
    let amount
    amount = startingCapital * interestRate * applicationTime

    return `considerando juros simples, se você aplicar R$${startingCapital} por ${applicationTime} meses, rendendo ${interestRate}% ao mês, ao final você terá R$${amount}`
} 

function compoundInterest (startingCapital, interestRate, applicationTime) {
    let amount
    amount = startingCapital * Math.pow((1 + interestRate), applicationTime)
    return `considerando juros compostos, se você aplicar R$${startingCapital} por ${applicationTime} meses, rendendo ${interestRate}% ao mês, ao final você terá R$${amount.toFixed(2)}`
}

console.log(simpleInterest(100, 0.5, 15))
console.log(compoundInterest(100, 0.5, 15))