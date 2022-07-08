let temperatura
let temperaturaCelsius
let temperaturaFahrenheit
let mensagemDeErro = false

function descobrirTemperatura(temperatura) {
    if (temperatura && (temperatura.includes("°c") || (temperatura.includes("°C")))){
        temperatura = temperatura.toUpperCase()
        temperaturaCelsius = Number(temperatura.replace("°C", ""))
    } else if (temperatura && (temperatura.includes("°f") || (temperatura.includes("°F")))) {
        temperatura = temperatura.toUpperCase()
        temperaturaFahrenheit = Number(temperatura.replace("°F", ""))
    } else if (!temperaturaCelsius && !temperaturaFahrenheit) {
        mensagemDeErro = true
        throw new Error("Temperatura não identificada!")
    }
}

let resultadoCelsius 
let resultadoFahrenheit

function converterTemperatura() {
    if (temperaturaCelsius) {
        resultadoFahrenheit = (temperaturaCelsius * 9 / 5 + 32).toFixed(1)

    } else if (temperaturaFahrenheit) {
        resultadoCelsius = ((temperaturaFahrenheit - 32) * 5 / 9).toFixed(1)
    }
}

let sinalCelsius = "°C"
let sinalFahrenheit = "°F"

function mostrarTemperatura() {
    if (resultadoCelsius) {
        console.log(resultadoCelsius + sinalCelsius)
    } else if (resultadoFahrenheit) {
        console.log(resultadoFahrenheit + sinalFahrenheit)
    }
}

function conversao(temperatura) {
    descobrirTemperatura(temperatura)
    converterTemperatura()
    mostrarTemperatura()
}

conversao("70°F")






