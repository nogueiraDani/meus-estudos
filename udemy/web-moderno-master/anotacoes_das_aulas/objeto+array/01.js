/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/

const nomes = ["Leonardo", "Maria"]
const saudacao = "Olá, "
const pontuacao = "!"

const cumprimentar = nomes.forEach(nomes => console.log(saudacao.concat(nomes).concat(pontuacao)))

