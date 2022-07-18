class Carro {
    ligado = false;
    nivelCombustivel = 100;
    velocidade = 0;
    cor;

    constructor(cor) {
        console.log("carro novo criado");
        this.cor = cor;
    }

    ligar() {
        if (this.ligado) {
            console.log("o carro já está ligado");
        } else {
            console.log("carro ligado agora")
            this.ligado = true;
        }
    }

    andar() {
        if (!this.ligado) {
            this.ligar();
            this.velocidade = 40;
        } else {
            this.velocidade = 40;
        }
    }
}

let carro1 = new Carro("rosa");
carro1.andar();
console.log(carro1.ligado);
console.log(carro1.velocidade);
console.log(carro1.cor);

let carro2 = new Carro("azul");
console.log(carro2.ligado);
console.log(carro2.velocidade);
console.log(carro2.cor);

console.log(typeof carro); // tipo do dado
console.log(carro1.constructor.name); // nome do tipo do dado

