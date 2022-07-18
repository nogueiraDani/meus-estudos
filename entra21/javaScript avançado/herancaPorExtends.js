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

class CarroQuebrado extends Carro {
    andar() {
        console.log("carro quebrado!")
    }
}

let carro = new CarroQuebrado();
carro.andar();
console.log(carro.velocidade);