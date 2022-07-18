
package Exc_12;

public class App {

    public static void main(String[] args) {
        
        float margemDoDistribuidor = 0.28f;
        
        float imposto = 0.45f;
        
        float custoDeFabrica = 68950.00f;
        
        float valorFinalFabrica = (custoDeFabrica + (custoDeFabrica * imposto));
        
        float valorFinalLoja = valorFinalFabrica + (valorFinalFabrica * margemDoDistribuidor);
        
        System.out.println(valorFinalLoja);
        
        
        
    }
}
