/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function pedirRefeicao(quantidade, pedido) {
    switch (pedido) {
        case 100:
            return `${quantidade} Cachorro Quente(s) = R$${(3.00 * (quantidade)).toFixed(2).replace(".", ",")}`
        case 200:
            return `${quantidade} Hambúrguer Simples = R$${(4.00 * (quantidade)).toFixed(2).replace(".", ",")}`
        case 300:
            return `${quantidade} Cheeseburguer(s) = R$${(5.50 * (quantidade)).toFixed(2).replace(".", ",")}`
        case 400:
            return `${quantidade} Bauru(s) = R$${(7.50 * (quantidade)).toFixed(2).replace(".", ",")}`
        case 500:
            return `${quantidade} Refrigerante(s) = R$${(3.50 * (quantidade)).toFixed(2).replace(".", ",")}`
        case 600:
            return `${quantidade} Suco(s) = R$${(2.80 * (quantidade)).toFixed(2).replace(".", ",")}`

        default:
            return "dados inválidos"

    }
}

console.log(pedirRefeicao(2, 100))
console.log(pedirRefeicao(7, 200))
console.log(pedirRefeicao(3, 300))
console.log(pedirRefeicao(12, 400))
console.log(pedirRefeicao(15, 500))
console.log(pedirRefeicao(4, 600))
console.log(pedirRefeicao(2, 102))