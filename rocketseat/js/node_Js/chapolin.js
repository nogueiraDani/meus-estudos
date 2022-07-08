const { inherits } = require('util')
const { EventEmitter } = require('events')

function character (nome) {
    this.nome = nome
}

inherits(character, EventEmitter)

const chapolin = new character("Chapolin Colorado")
chapolin.on("help", () => {
    console.log(`Eu! O ${chapolin.nome}!`)
})

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit("help")
