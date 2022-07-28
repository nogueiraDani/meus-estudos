//gerando objeto prototipado

let carro = {}; // iniciando objeto vazio
console.log(carro);

//add atributos
carro.cor = "rosa";
carro.ligado = false;
carro.cavalos = 65;
carro.qtdePortas = 4;
carro.velocidade = 0;
carro.tipoCombustivel = "gasolina"
carro.nivelCombustivel = 100

console.log(carro);

//add método no objeto
carro.ligar = function(){
    if (carro.ligado) {
        console.log("o carro já está ligado");
    } else {
        console.log("carro ligado agora")
        this.ligado = true; //referencia o objeto em questão
    }
}

carro.andar = function(){
    this.velocidade = 40;
    console.log(carro.velocidade);
}

carro.ligar();
carro.ligar();
carro.andar();
console.log(carro.ligado);


