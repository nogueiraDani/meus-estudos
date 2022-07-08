package Exc_03;

public class App {
    
    public static void main(String[] args) {
        
        BombaCombustivel teste = new BombaCombustivel("Alcool", 4.89f, 1000f);
        
        teste.abastecerPorLitro(20f);
        
        teste.abastecerPorValor(300f);
        
        teste.alterarValorLitro(4.95f);
        
        teste.alterarTipoDeCombustivel("Gasolina");
        
        teste.alterarQuantidadeCombustivel(800f);
        
    }
}
