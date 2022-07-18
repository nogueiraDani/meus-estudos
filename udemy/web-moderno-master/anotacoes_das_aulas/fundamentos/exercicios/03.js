/*Crie uma função que recebe dois parâmetros, base e exponent, e retorne a base elevado ao exponent. */


function calculatePower(base, exponent) {
    let result = base
    if (exponent == 0 ){
        return console.log(`${base} elevado à ${exponent} é igual a 1`)
    } else {
        for (i = 1; i < exponent; i++) {
            result *= base
        } return console.log(`${base} elevado à ${exponent} é igual a ${result}`)
    } 
    
}

calculatePower(8, 7)
calculatePower(6, 0)
calculatePower(12, 15)