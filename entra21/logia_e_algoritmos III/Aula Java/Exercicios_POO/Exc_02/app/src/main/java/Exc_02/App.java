/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package Exc_02;

public class App {

    public static void main(String[] args) {
        
        ContaCorrente teste = new ContaCorrente(100, "Daniela", 0);
        
        teste.deposito(200f);
        
        teste.deposito(300f);
        
        teste.alterarNome("Dani");
        
        teste.saque(400f);
        
        System.out.println(teste.getSaldo());
        
        
    }
}
