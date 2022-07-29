
let pedido1 = {
    "nome": "lanche",
    "tempo": 2000
}

let pedido2 = {
    "nome": "pizza",
    "tempo": 1000
}

let pedido3 = {
    "nome": "lasanha",
    "tempo": 3000
}


const cozinha = (pedido) => new Promise((resolve, reject) => {
    console.log("executando promise")
    let tenhoIngredientes = true // pedido["nome"] != "pizza" 
    setTimeout(() => {
        if (tenhoIngredientes) {
            console.log(pedido['nome'] + " pronto!")
            resolve("levando " + pedido['nome'] + " para o cliente")
        }
        reject("sem ingredientes")
    }, pedido['tempo'])
})

function* garcon() {
    yield cozinha(pedido1)
    yield cozinha(pedido2)
    yield cozinha(pedido3)
    yield cozinha(pedido1)
    yield cozinha(pedido2)
    yield cozinha(pedido3)
}

const janta = async () => {
    let meuGarcon = garcon()
    console.log("iniciando pedido")
    let pedido = meuGarcon.next()
    while (!pedido.done){
        console.log(await pedido.value)
        pedido = meuGarcon.next()
    }
    console.log("pedir conta")
}

janta()