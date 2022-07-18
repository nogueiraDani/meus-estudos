/* 
    Prototype
    -prototype-based language
    -prototype chain
    -__proto__
*/

/*
    type conversion (typecasting) vs type coercion
    -alteração de uim tipo de dado para outro
*/

console.log("9" + 5) //concatenação
console.log(Number("9") + 5) //conversão

//Manipulando strings e números

//transformar string em numero e numero em string de

let string = "123"
console.log(typeof string)
console.log(Number(string))

let number = 321
console.log(typeof number)
console.log(String(number))

//contar quantos caracteres tem uma palavra e quantos dígitos tem um numero

let word = "Josecléia"
console.log(word.length)

let numero = 12345
console.log(String(numero).length)

// casas decimais + trocar . por ,

let numberDec = 352.958475465
console.log(numberDec.toFixed(2))
console.log(numberDec.toFixed(2).replace(".", ","))

//maiúsculas e minusculas
let frase = "Programar é muito Bacana!"

console.log(frase.toUpperCase()) //maiúsculas
console.log(frase.toLowerCase()) // minusculas

//separando strings

let fraseComEspaco = "Hoje é terça-feira!"
console.log(fraseComEspaco)
let myArray = fraseComEspaco.split(" ") //elimina o espaço
console.log(myArray)
let fraseComUnderline = myArray.join("_") //adiciona o _
console.log(fraseComUnderline.toLowerCase()) //adicionando o _ + todos em minusculo

//encontrar palavras
let fraseParaExemplo = "Eu quero viver o amor!"

console.log(fraseParaExemplo.includes("amor")) //procura palavra

//criando array com construtor
let arrayExemplo = new Array("a", "b", "c")
console.log(arrayExemplo)

//varios tipos de elementos do array
console.log([
    "a",
    {
        type: "array"
    },
    function () {
        return "alo"
    }
]) //mostra todos os itens da array

console.log([
    "a",
    {
        type: "array"
    },
    function () {
        return "alô"
    }
][1]) //mostra a posição 1

console.log([
    "a",
    {
        type: "array"
    },
    function () {
        return "alô"
    }
][2]()) //mostra a posição 2 já executando a função

console.log([
    "a",
    {
        type: "array"
    },
    function () {
        return "alô"
    }
].length) //mostra quantos itens há

//transformando string em array

let palavraDeExemplo = "testando"
console.log(Array.from(palavraDeExemplo))


let techs = ["html", "css", "js"]
techs.push("nodejs") //adicionar um item no fim
techs.push("C#")

techs.unshift("sql") //adicionar item no começo
techs.unshift("C++")

techs.pop() //remover do fim 

techs.shift() //remover do começo

//pegar somente alguns elementos do Array
console.log(techs.slice(1, 3 ))

//remover 1 ou mais itens em qualquer posicao do Arrays
techs.splice (0, 1)

//encontrar a posição de um elemento Array
let index = techs.indexOf ("html")
console.log (index)

techs.splice (index, 1) //excluindo o item referente ao index

console.log(techs)