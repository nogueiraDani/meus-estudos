/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */ 

function filtrar(x) {
    let somenteNumeros = x.filter(elemento => typeof elemento === "number" )
    return somenteNumeros
}

let array = ["Dani", 1, 50, 60.5, "José"]

console.log(filtrar(array))

