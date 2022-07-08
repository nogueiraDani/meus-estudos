//operators

let number = 1

console.log(number + 1) // binary operator

console.log(++number) // unary operator
console.log(--number) // unary operator
console.log(typeof number) // unary operator

console.log(false ? "alo" : "nada") // ternary operator

//new -- cria um novo projeto

let name = new String("Dani")
name.surName = "Rampim" // sobrenome
let age = new Number(25)
console.log(name, age)

delete name.surName //apagar

console.log(name)

// operadores aritimeticos

console.log(3.2 * 5) //multiplicação *

console.log(5.6 / 4) //divisão /

console.log(5.8 + 98) //soma

console.log(8 - 57) //subtração

let remainder = 11 % 2
console.log(remainder) //resto da divisao %

let increment = 0
console.log(increment) 
console.log(++increment) //incremento ++, pode se antes ou depois, depende do caso

let decrement = 0
console.log(decrement)
console.log(--decrement) //decremento --, mesmo casod o incremento

console.log(3 ** 3) //exponencial **

//agrupador de operadores () segue a regra da matematica

//operadores de comparação
//compara e retorna boolean

let one = 1
let two = 2

console.log(one == 1) // igual a
console.log(two == "1")

console.log(one != 2) // diferente de
console.log(two != "2")

console.log(one === 1) // estritamente igual a
console.log(two === "1")

console.log(two !== 2) // estritamente diferente de
console.log(two !== "2")

// operadores maior que, menor que, maior ou igual, menor ou igual, funcionam como na matematica
console.log(one >= 2)

//operadores de atribuição - assigment
let x
console.log(x)

x = 5 // assigment
console.log(x)
x += 2 // x = x +2
console.log(x)
x -= 1 // x = x - 1
console.log(x)
x *= 2 // x = x * 2
console.log(x)
x /= 3 // x = x / 3
console.log(x)
x %= 2 // x = resto da divisao
console.log(x)
x **= 2 // x = x * x
console.log(x)

// logical operators
let pao = true
let queijo = true

console.log(pao && queijo) // && igual a "e"
console.log(pao || queijo) // || igual a "ou"
console.log(!pao) //operador de negação, troca o valor de

// conditional operators - ternario
const niceBreakfast = pao && queijo ? "Café top!" : "Café ruim"
console.log(niceBreakfast)

// string operators
//comparação
console.log("a" == "b")

//concatenation 
let alpha = "alpha"
console.log(alpha + "bet") // concatenação
alpha += "bet"
console.log(alpha)

/* falsy dentro de um ternario (condicionais e loops)
    false
    0
    -0
    ""
    null
    undefined
    Nan
*/

/* thurhy dentro de um ternario (condicionais e loops)
    true
    {}
    []
    1
    3.2
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/* Precedencia dos operadores
    ()
    ! ++ --
    * /
    + -
    < <= >= >
    == != === !==
    &&
    ||
    ?:
    = += -= *=
*/