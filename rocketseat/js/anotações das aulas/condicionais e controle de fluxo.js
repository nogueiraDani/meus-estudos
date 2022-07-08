// flow control

// if...else

let temperature = 38.7
let febreAlta = temperature >= 38.5
let inicioDaFebre = temperature < 38.5 && temperature > 37.8

if (temperature >= 37.8) {
    console.log("Febre")
} else {
    console.log("Tudo ok!")
}

if (febreAlta) {
    console.log("Febre alta")
} else if (inicioDaFebre) {
    console.log("Inicio da febre")
} else {
    console.log("Tudo ok!")
}

//switch
let expression = "c"

switch (expression) {
    case "a":
        console.log("a")
        break
    case "b":
        console.log("b")
        break
    default:
        console.log("default")
        break
}

//throw -->> disparar

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório" // ou throw new Error("Nome é obrigatório")
    } else {
        console.log(name)
    }
}

    /* ou pode escrever assim:
    if (name === "") {
        throw "Nome é obrigatório"
    }
        console.log(name)    
}
*/ 

console.log("Depois do erro")
//try ... catch -->> tentar... capturar
try {
    sayMyName ("")
} catch (e) {
    console.log(e)
}
console.log("Depois do try/catch")