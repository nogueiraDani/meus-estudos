const escola = "Cod3r"

console.log(escola.charAt(4)) //letra do indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // codigo do unicode / html
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // imprime do indice 1 para frente - subtrai o indice 0
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concatenar com funcçao
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // substitui 3 por e

console.log('Ana,Maria,Pedro'.split(',')) // transforma em array