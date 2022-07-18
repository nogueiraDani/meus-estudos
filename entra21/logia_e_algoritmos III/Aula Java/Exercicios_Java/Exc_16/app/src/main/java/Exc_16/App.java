
package Exc_16;

public class App {

    public static void main(String[] args) {
        
        String nome = "Daniela";
        
        int primeiraNota = 10;
        
        int segundaNota = 2;
        
        int terceiraNota = 5;
        
        float media = ((primeiraNota + segundaNota + terceiraNota) / 3);
        
        if (media <= 5 ) {
            System.out.println(nome + " voce foi reprovado!");
        } else if (media >= 7) {
            System.out.println(nome + " voce foi aprovado!");
        } else {
            System.out.println(nome + " voce ficou em recuperacao...");
        }
             
        
    }
}
