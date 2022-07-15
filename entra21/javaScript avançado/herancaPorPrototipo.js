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

let carro = new Carro("rosa");

console.log(carro.__proto__);
console.log(typeof carro);

let carro2 = Object.create(carro);
console.log(carro2.__proto__);
console.log(typeof carro2);

let carro3 = Object.create(carro);
carro3.andar();
console.log(carro3.__proto__);
console.log(carro3.velocidade);


