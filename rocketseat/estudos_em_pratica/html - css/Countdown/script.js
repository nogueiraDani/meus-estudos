let seconds = 1000
let minutes = seconds * 60
let hours = minutes * 60
let days = hours * 24

let dataFinal = new Date('12/25/2022 19:00:00').getTime()

function contagemRegressiva() {
    let hoje = new Date(Date.now()).getTime()
    let difData = (dataFinal - hoje)

    let dias = Math.floor(difData / days)
    let horas = Math.floor(difData % days / hours)
    let minutos = Math.floor(difData % hours / minutes)
    let segundos = Math.floor(difData % minutes / seconds)

    /*if (dias >= 0 && dias < 10) {
        dias = "0" + dias
    }

    if (horas >= 0 && horas < 10) {
        horas = "0" + horas
    }

    if (minutos >= 0 && minutos < 10) {
        minutos = "0" + minutos
    }

    if (segundos >= 0 && segundos < 10) {
        segundos = "0" + segundos
    }*/

    document.getElementById("tempo-faltante").innerHTML = (`${String(dias).padStart(2, 0)} : ${String(horas).padStart(2, 0)} : ${String(minutos).padStart(2, 0)} : ${String(segundos).padStart(2,0)} `) //add no lugar da verificação o preenchimento do numero (transformado em String) com um 0 a esquerda

}

let x = setInterval(() => contagemRegressiva(), 1000)

let inscrever = document.getElementById("btn-inscrever")

let caixaFormulario = document.getElementById("caixa-formulario")

inscrever.onclick = function () {
    caixaFormulario.classList.remove("hidden")
}

document.addEventListener("keydown", function(event) {
    let isEscKey = event.key === "Escape"
    if (isEscKey) {
        caixaFormulario.classList.add("hidden")
    }
})

