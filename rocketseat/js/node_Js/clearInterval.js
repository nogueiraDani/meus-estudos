const timeOut = 1000

const checking = () => {
    console.log("Checking!")
}

let interval = setInterval(checking, timeOut)

//clearInterval(interval) // termina imediatamente

setTimeout( () => clearInterval(interval), 4000)