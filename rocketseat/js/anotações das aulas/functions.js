console.log("Aula sobre functions (funções)")

//criar aplicativo de frases motivacionais

//declaration - declaração da função
//function statement
function createPhrases() {
    console.log("Estudar")
    console.log("Anotar")
    console.log("Revisar")
}

//executar a função
//rodar, chamar, invocar
// execute, run, call, invoke
createPhrases()

//function expression
//function anonymous

//parameters
const sum = function (number1, number2) {
    let total = number1 + number2
    return total
}

sum(2, 3) //arguments

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//function scope
let subject = "create video"

function createThink (subject) {
    subject = "study video"
    return subject
}
console.log(subject)
console.log(createThink(subject))
console.log(subject)

//function hoisting 
sayMyName() 

function sayMyName () {
    console.log("Dani")
}

//function hoisting nao funciona com function anonymous

//myName()

let myName = function () {
    console.log("Daniela")
}

//arrow function
let meuNome = (nome) => {
    console.log (nome)
}

meuNome("Daniela N.R.")

//callback function

function oNome(name) {
    console.log("antes de executar a callback")
    name ()
    console.log ("depois de executar a callback")
}

oNome(
    () => {
        console.log ("estou em uma callback")
    }
)

/* Function() constructor

*expressão new
*criar um novo objeto
*expressão this */

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person ("Mayk")
const joao = new Person ("Joao")

console.log(mayk.walk())
console.log(joao.walk())

