//codigo do carro

let xCarros = [590, 590, 590, 590, 590, 590];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeDosCarros = [2, 3.1, 4.2, 3, 4, 5];

let comprimentoCarro = 60;
let larguraCarro = 40;

function mostraCarro(){
  for( let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, larguraCarro);
  }
}

function movimentaCarro(){
  for( let i = 0; i < imagemCarros.length; i++){
      xCarros [i] -= velocidadeDosCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
}
}

function passouTodaATela (xCarro){
  return xCarro < - 60;
}