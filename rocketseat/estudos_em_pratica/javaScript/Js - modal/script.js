let buttonOpenModal = document.querySelector("button")

let modalWrapper = document.getElementById("modal-wrapper")

buttonOpenModal.onclick = function () {
    modalWrapper.classList.remove("invisible")
}

document.addEventListener("keydown", function(event) {
    let isEscKey = event.key === "Escape"
    if (isEscKey) {
        modalWrapper.classList.toggle("invisible")
    }
})



