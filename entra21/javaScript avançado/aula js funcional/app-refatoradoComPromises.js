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



const jantar = () => {
    console.log("iniciando os pedidos")
    cozinha(pedido1).then((retorno) => {
            console.log(retorno)
            console.log("--comer--")
        }).then(() => cozinha(pedido2).then((retorno) =>{
            console.log(retorno)
            console.log("--comer--")
        }))
          .then(() => cozinha(pedido3).then((retorno) => {
            console.log(retorno)
            console.log("--comer--")
          }))
          .catch(retorno => {
            console.log(retorno)
            console.log("mudar pedido")
        }).finally(() => console.log("pedir a conta!"))
}

jantar();