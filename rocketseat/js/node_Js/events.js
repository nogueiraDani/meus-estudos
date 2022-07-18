const { EventEmitter } = require('events')

const ev = new EventEmitter() //busca novo evento

// console.log(ev)

ev.on("Diga algo", (message) => {  // ativa para ouvir evento sempre
    console.log("Eu ouvi, ", message)
})

ev.once("Diga algo", (message) => {  // ativa para ouvir evento 1x
    console.log("Eu ouvi, ", message)
})

ev.emit("Diga algo", "Dani")
ev.emit("Diga algo", "Mailson")
ev.emit("Diga algo", "Mari")

