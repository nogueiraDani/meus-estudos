// import { Car as Veiculo };
// import Car, Bike
// import * as Util from './exemplo;

import {
    Bike
} from './modules/agregation.mjs';
//import {Bike} from './modules/bike.mjs';


let bike = new Bike();
bike.andar();

document.getElementById('main').innerHTML = `velocidade da bicicleta: ${bike.velocidade} <br>`;
document.getElementById('main').innerHTML += `ok! <br>`;

document.getElementById('botao').addEventListener('click', function () {
    import('./modules/agregation.mjs').then((modules) => {
        let carro = new modules.Car();
        carro.andar();
        document.getElementById('main').innerHTML += `velocidade do carro: ${carro.velocidade}`;
    })
});