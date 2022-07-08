//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 18;
let raioBolinha = diametroBolinha / 2;

//velocidade da bolinha
let velociadadeXBolinha = 4;
let velociadadeYBolinha = 4;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 8;
let alturaRaquete = 90;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYDoOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo

let somDaRaquetada;
let somDoPonto;
let somDaTrilha;

//chance de errar

let chanceDeErrar = 0;


function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function preload(){
  somDaTrilha = loadSound("trilha.mp3");
  somDoPonto = loadSound("ponto.mp3");
  somDaRaquetada = loadSound("raquetada.mp3");
}

function draw() {
  background(20);
  mostraBolinha(); 
  movimentaBolinha();  
  verificaBordaComBolinha(); 
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoComRaquete();
  colisaoDasRaquetesDoGithub(xRaquete, yRaquete );
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteDoOponente();
  colisaoDasRaquetesDoGithub(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velociadadeXBolinha;
  yBolinha += velociadadeYBolinha;
}

function verificaBordaComBolinha(){
  if (xBolinha > (width - raioBolinha) || xBolinha < raioBolinha ){
    velociadadeXBolinha *= -1;
  }
  if (yBolinha > (height - raioBolinha) || yBolinha < raioBolinha ){
    velociadadeYBolinha *= -1;
      }
}

function mostraRaquete(x, y){
    rect(x, y, larguraRaquete, alturaRaquete);  
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoComRaquete(){
  if( (xBolinha - raioBolinha < xRaquete + larguraRaquete) && (yBolinha + raioBolinha < yRaquete + alturaRaquete) && (yBolinha + raioBolinha > yRaquete)){
    velociadadeXBolinha *= -1;
    somDaRaquetada.play();
  }
}

function colisaoDasRaquetesDoGithub(x, y){
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velociadadeXBolinha *= -1;
    somDaRaquetada.play();
  }
}

function movimentaRaqueteDoOponente(){
  velocidadeYDoOponente = yBolinha -  yRaqueteOponente - alturaRaquete/2 -30 ;
  yRaqueteOponente += velocidadeYDoOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function incluiPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(220,20,60));
  rect(155, 10, 40, 20 );
  fill(255);
  text(meusPontos, 175, 26);
  fill(color(220,20,60));
  rect(405, 10, 40, 20 );
  fill(255);
  text(pontosDoOponente, 425, 26);
  line(300, 5, 300, 395);
  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos++;
    somDoPonto.play();
  }
  if(xBolinha <10){
    pontosDoOponente++;
    somDoPonto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 3
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 3
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}










