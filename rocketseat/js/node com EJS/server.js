const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    const items = [{
            title: "D",
            message: "esenvolvimento"
        }, {
            title: "A",
            message: "mor"
        }, {
            title: "N",
            message: "ovidade"
        }, {
            title: "I",
            message: "nformação"
        }

    ] 
    
    const subtitle = "O EJS é uma linguagem de modelagem para criação de pagina HTML usando JavaScript"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    }) ///sempre na pasta views para renderizar
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)
console.log("Rodando")