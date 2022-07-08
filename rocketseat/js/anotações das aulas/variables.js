/* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

*/
console.log("Aula sobre variables (variáveis)")

var name //variavel global

name = "Dani"

console.log(typeof name) // mostrar o tipo da variavel

let age, isHuman //variavel local

age = 32
isHuman = true

console.log(name, age, isHuman)

console.log("a " + name + " tem " + age + " anos") // usando concatenação

console.log(`a ${name} tem ${age} anos`) // usando `` +${var}

//criando objeto
const person = {
    name: "Daniela",
    age: 32,
    weight: 88.4,
    isAdmin: true,
}

console.log(person) //mostra todo o objeto

console.log(person.name) // mostra o nome do objeto

console.log(`${person.name} tem ${person.age} anos`)

//criando Arrays
const animal = [
    "Lion",
    "Monkey",
    "Cat",
    "Dog"
]

console.log(animal) // mostra todos do Arrays

console.log(animal[0]) // mostra item do Arrays

console.log(animal.length) //mostra a quantidade de itens da Arrays