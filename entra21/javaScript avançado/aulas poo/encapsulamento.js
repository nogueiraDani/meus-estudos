function Carro() { // para encapsular tem q usar o ECMAScript 05
    this.ligado = false;
    this.nivelCombustivel = 100;
    this.velocidade = 0;
    this.cor;

    let segredo = "segredo";
    let metodoInterno = function () {
        console.log("só pode ser acessada dentro do objeto")
    }

    this.constructor = function(cor) {
        console.log("carro novo criado");
        this.cor = cor;
    }

    this.ligar = function() {
        if (this.ligado) {
            console.log("o carro já está ligado");
        } else {
            console.log("carro ligado agora")
            this.ligado = true;
        }
        console.log(segredo); /// aquiiii
        metodoInterno(); /// aquiii
    }

    this.andar = function() {
        if (!this.ligado) {
            this.ligar();
            this.velocidade = 40;
        } else {
            this.velocidade = 40;
        }
    }
}

let carro = new Carro();
carro.ligar();
//console.log(carro.segredo); //erro
//console.log(segredo); // erro
//metodoInterno(); // erro
//console.log(carro.metodoInterno()); // erro


// encapsulando Funções

let objeto1 = {
    "funcao1" : function() {
        console.log("Função 1");
    }
}

let objeto2 = {
    "funcao2" : function() {
        console.log("Função 2");
    }
}

objeto1.funcao1();
objeto2.funcao2();

// IIFE -- faz uma funcao anonima e ja invoca na sequencia

(function(){
    function funcao1() {
        console.log("Função 1")
    }
    funcao1();
}());
