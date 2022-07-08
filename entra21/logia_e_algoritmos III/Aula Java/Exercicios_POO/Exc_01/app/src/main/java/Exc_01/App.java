
package Exc_01;

import java.util.Calendar;


public class App {

    public static void main(String[] args) {
                
        Calendar calendario = Calendar.getInstance();
        
        int anoAtual = calendario.get(Calendar.YEAR);
 
        
        Pessoa teste = new Pessoa("Daniela", 1989, 1.70f);
        
        teste.imprimirNome();
        teste.imprimirAnoNascimento();
        teste.getAltura();
        teste.imprimirIdade(anoAtual);
       
        
    }
}
