/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/


function divide(dividend, divider) {
    let result = (dividend / divider).toFixed(2)
    console.log (`${dividend} divido por ${divider} é igual a ${result}`)
    let rest = dividend % divider
    console.log(`o resto da divisao de ${dividend} por ${divider} é ${rest}`)
}

divide(11, 4)
divide(10, 7)
divide(350, 18)