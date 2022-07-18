
let notaInicial //= document.querySelector("form__input")

let estadoInicial = "numérico" //document.getElementById("note__type-inicial")
let estadoDesejado = "conceito" //document.getElementById("note__type-desired")


function conversorNota(notaInicial) {
    let conceitoA = notaInicial >= 90 && notaInicial <= 100
    let conceitoB = notaInicial < 90 && notaInicial >= 80
    let conceitoC = notaInicial < 80 && notaInicial >= 70
    let conceitoD = notaInicial < 70 && notaInicial >= 60
    let conceitoF = notaInicial <= 60 && notaInicial >= 0

    let notaFinal;

    if (conceitoA) {
        notaFinal = "A"
    } else if (conceitoB) {
        notaFinal = "B"
    } else if (conceitoC) {
        notaFinal = "C"
    } else if (conceitoD) {
        notaFinal = "D"
    } else if (conceitoF) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota Inválida"
    }

    return notaFinal
}

console.log(conversorNota(10))