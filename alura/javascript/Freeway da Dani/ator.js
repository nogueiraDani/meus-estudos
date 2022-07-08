// codigo do ator

let xAtor = 300;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}


function movimentosDoAtor(){
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
          yAtor += 5;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15);
      if (colisao){
    voltaParaPosicaoInicialAtor();
        tocaSomDaColisao();
        if (pontosMaiorQueZero()){
          meusPontos -= 1;
        }
    }
  }
}

function voltaParaPosicaoInicialAtor() {
  yAtor = 366;
}

function incluiPontos(){
  fill(255,255,0);
  textAlign(CENTER);
  textSize(20);
  text(meusPontos, width/6, 25)
}

function marcaPontos(){
  if(yAtor <= 13){
    meusPontos +=1;
    voltaParaPosicaoInicialAtor();
    tocaSomDosPontos();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}

function tocaSomDosPontos(){
  somDosPontos.play();
}

function tocaSomDaColisao(){
  somDaColisao.play();
}


  