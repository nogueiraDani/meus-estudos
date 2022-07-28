//export default class Car {...}
// export class Car {...}

class Car {
    velocidade = 0;
    ligado = false;

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    andar() {

        if (!this.ligado) {
            this.ligar();
            this.velocidade = 40;
        } else {
            this.velocidade = 40;
        }
        if (this.velocidade > 0) console.log("carro já está em movimento");

    }
}

export {Car};
// export default Car;
// export {Car as Veiculo};