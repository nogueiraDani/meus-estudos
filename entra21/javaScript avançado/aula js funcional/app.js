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
    "nome" : "pizza",
    "tempo": 1000
}

let pedido3 = {
    "nome" : "lasanha",
    "tempo": 3000
}

const retornarPedido3 = (retorno3) => {
    garcon(retorno3, encerrarPedidos)    
}

const retornarPedido2 = (retorno2) => {
    garcon(retorno2, fazerPedido3)
}

const retornarPedido1 = (retorno1) => {
    garcon(retorno1, fazerPedido2)
}

const encerrarPedidos = () => {
    console.log("pagar conta")
}


const fazerPedido3 = () => {
    garcon("pedido 3 para a cozinha", () => {
        cozinha(pedido3, retornarPedido3)
    })
}

const fazerPedido2 = () => {
    garcon("pedido 2 para a cozinha", ()=>{
        cozinha(pedido2, retornarPedido2)
    })
}
const fazerPedido1 = () => {
    garcon("pedido 1 para a cozinha", ()=>{
        cozinha(pedido1, retornarPedido1)
    })
}

const cozinha = (pedido, callback) => setTimeout(() => {
    console.log(pedido['nome'] + " pronto!")
    callback(pedido['nome'] + " para o cliente")
}, pedido['tempo']);

const garcon = (tarefa, callback) => {
    console.log("Levando " + tarefa)
    callback()
}

const jantar = () => {
    console.log("iniciando os pedidos")
    fazerPedido1()
}

jantar();