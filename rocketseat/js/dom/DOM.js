let titulo = document.getElementById("blog__title")
console.log(titulo)

let paragrafo = document.getElementsByClassName("description")
console.log(paragrafo)

let tag = document.getElementsByTagName("p")
console.log(tag)

let seletor = document.querySelector(".description")
console.log(seletor)

let seletores = document.querySelectorAll("meta")
console.log(seletores)

//textContent
titulo.textContent = "Hello Word"
console.log(titulo.textContent)
titulo.textContent += " ou Olá Devs!"
console.log(titulo.textContent)
titulo.innerText = "Vou mudar tudo agora, hahaha"
console.log(titulo.textContent)

//add no HTML
titulo.innerHTML = "Lorem é chato<big>!!!</big>"

//pegar o valor
let valor = document.querySelector("input")
console.log(valor.value)
//trocar valor
valor.value = "Não, Não!"

//manipulando atributos

let header = document.querySelector("header")
console.log(header)
header.setAttribute("id", "header") //adicionar atributo

const headerId = document.querySelector("#header")
console.log(headerId.getAttribute("class")) // pegar atributo

header.removeAttribute("id") //remover atributo
header.removeAttribute("class")

//alterando estilos com style

const corpo = document.querySelector("body")
corpo.style.backgroundColor = "#f9f3D2"
console.log(corpo.style.backgroundColor)

//classList
corpo.style.backgroundColor = ""
corpo.classList.add("active" , "fundo") //add class do css
corpo.classList.remove("active") // remove class do css
corpo.classList.toggle("active") // tipo interruptor, add ou exclui
console.log(corpo.classList)

//navegando pelos elementos

// nó pai
console.log(corpo.parentNode) 
console.log(corpo.parentElement)

console.log(header.parentNode)

// nó filho

//childNodes  ---  children
console.log(corpo.childNodes) // pega o espaço como text
console.log(corpo.children)

//firstChild  --- firstElementChild
console.log(corpo.firstChild)// pega o espaço como text
console.log(corpo.firstElementChild) 

//lastChild  ---  lastElementChild
console.log(corpo.lastChild) // pega o espaço como text
console.log(corpo.lastElementChild)


//navegar nos elementos irmãos

//nextSibling  ---  nextElementSibling >> proximo irmão
console.log(header.nextSibling)  // pega o espaço como text
console.log(header.nextElementSibling)

//previousSibling  --- previousElementSibling  >> irmão anterior
console.log(header.previousSibling) // pega o espaço como text
console.log(header.previousElementSibling)

//criar e add elementos na pagina

//createElement
let div = document.createElement("div")
div.innerText = "Olá Devs"

//append  ---  prepend

header.append(div) //add elemento no final

header.prepend(div) // add elemento antes

//insertBefore
let texto = document.querySelector(".description")
console.log(texto)
corpo.insertBefore(div, texto) // add elemento antes de outro

//para adicionar depois
corpo.insertBefore(div, texto.nextElementSibling)

// Eventos
//na tag do html add onclik ou outro e dentro ="add execução aqui"

function print(){
    console.log("print")
}

let input = document.querySelector("input")
input.onkeydown = function() {
    console.log("keydown")
}

//add event via Js
let h1 = document.querySelector("h1")

h1.addEventListener("mouseover", print) //print esta como atalho

//argumento envent

input.onkeydown = function (event){
    console.log(event.key) // sabe a tecla q foi digitada
    console.log(event.currentTarget.value) //sabe onde e o valor que foi digitado
    console.log(event)
}

