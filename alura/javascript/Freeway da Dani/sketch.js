
function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentosDoAtor();
  voltaPosicaoInicialDoCarro();
  marcaPontos();
  incluiPontos();
  verificaColisao();
  
}
