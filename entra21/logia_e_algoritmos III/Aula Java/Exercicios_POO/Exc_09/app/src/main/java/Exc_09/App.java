
package Exc_09;

import java.util.Date;

public class App {

    public static void main(String[] args) {
        
        Voo teste = new Voo(10);
        
        teste.iniciarVendas();
        
        teste.ocuparAssento(5);
        
        teste.ocuparAssento(8);
        
        System.out.println(teste.descobrirProximoLivre(8));
        
        System.out.println(teste.descobrirLugaresVagos());
        
        System.out.println(teste.verificarLugarVago(8));
        
        
        
        
    }
}
