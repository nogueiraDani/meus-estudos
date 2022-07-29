/*let elemento = document.getElementById('main');
elemento.addEventListener('click', function(){
    alert('clicou!')
});*/

/* funçao pura
    funcao com efeito colateral

    imutabilidade

    spread operator [..., a]

    transparencia referencial

    estado mutavel ou compartilhado

    estado disciplinado

    entidades de primeira ordem --> callback

    funcao com ordem superior 
    
    funcao ou const

    arrow function

    programação assincrona

    chamadas de retorno --> callback

    callback hells

    promises

    aync-await

    geradores


*/

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

const jantar = async () => {
    console.log("iniciando os pedidos")
    try {
        let retorno = await cozinha(pedido1)
        console.log(retorno)
        console.log("--comer--")
        await cozinha(pedido2)
        console.log(retorno)
        console.log("--comer--")
        await cozinha(pedido3)
        console.log("--comer--")
        console.log(retorno)
    } catch (retorno) {
        console.log(retorno)
        console.log("mudar pedido")
    }
    console.log("pedir a conta!")
}

// janta().then((result) => console.log(result))

/*
const funcaoSincrona = () => {
    let result = janta()
    return resultado
}

funcaoSincrona().then((resultado) => console.log(resultado))


*/

jantar();