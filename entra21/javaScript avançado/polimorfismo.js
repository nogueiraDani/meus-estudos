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

class CarroTurbo extends Carro {
    andar() {
        if (!this.ligado) {
            this.ligar();
            this.velocidade = 80;
        } else {
            this.velocidade = 80;
        }
    }
}

let carro = new CarroQuebrado();
carro.andar();
console.log(carro.velocidade);

let carroTurbo = new CarroTurbo();
carroTurbo.andar();
console.log(carroTurbo.velocidade);