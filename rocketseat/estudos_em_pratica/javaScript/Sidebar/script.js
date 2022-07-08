let clicouEmMenu = document.getElementById("icone__menu")

let itensRelativos = []

itensRelativos.push(document.getElementById("icone__logo"))
itensRelativos.push(document.getElementById("texto-caixa__buscar"))
itensRelativos.push(document.getElementById("texto__dashboard"))
itensRelativos.push(document.getElementById("texto__pets"))
itensRelativos.push(document.getElementById("texto__clientes"))
itensRelativos.push(document.getElementById("texto__vets"))
itensRelativos.push(document.getElementById("texto__ajustes"))
itensRelativos.push(document.getElementById("imagem__avatar"))
itensRelativos.push(document.getElementById("informacao__Vet"))

let esconder = "hidden"
let maiorLargura = "w-[250px]"
let menorLargura = "w-[78px]"

function adicionarClasseNaLista(lista, classe) {
    for (item of lista) {
        item.classList.add(classe)
    }
}

function removerClasseNaLista(lista, classe) {
    for (item of lista) {
        item.classList.remove(classe)
    }
}

function adicionaItem(objeto, item) {
    objeto.classList.add(item)
}

function removeItem(objeto, item) {
    objeto.classList.remove(item)
}


let caixaLogout = document.getElementById("caixa__logout")
let iconeLogout = document.getElementById("icone__logout")

let margemDireita = "mr-4"
let margemVertical = "mx-auto"
let paddingHorizontal = "py-4"

function redimensionaCaixaLogout() {
    if (tamanhoMenuLateral === 250) {
        removeItem(iconeLogout, margemDireita)
        adicionaItem(iconeLogout, margemVertical)
        removeItem(caixaLogout, maiorLargura)
        adicionaItem(caixaLogout, menorLargura)
    } else {
        adicionaItem(caixaLogout, maiorLargura)
        adicionaItem(iconeLogout, margemDireita)
        removeItem(caixaLogout, menorLargura)
    }

}

let menuLateral = document.getElementById("menu__lateral")
let tamanhoMenuLateral


function diminuirMenuLateral() {
    removeItem(menuLateral, maiorLargura)
    adicionaItem(menuLateral, menorLargura)
    redimensionaCaixaLogout()
    tamanhoMenuLateral = 78
}

function aumentarMenuLateral() {
    removeItem(menuLateral, menorLargura)
    adicionaItem(menuLateral, maiorLargura)
    redimensionaCaixaLogout()

    tamanhoMenuLateral = 250
}

clicouEmMenu.onclick = function () {

    if (tamanhoMenuLateral == 250) {
        diminuirMenuLateral()
        adicionarClasseNaLista(itensRelativos, esconder)

    } else {
        aumentarMenuLateral()
        removerClasseNaLista(itensRelativos, esconder)
    }
}