
package Exc_04;

public class App {

    public static void main(String[] args) {
        
        Elevador vancouver = new Elevador(24, 15);
        
        vancouver.inicializar();
        
        vancouver.entrar(5);
        
        vancouver.subir(10);
        
        vancouver.sair(2);
        
        vancouver.descer(5);
        
        vancouver.entrar(12);
        
        vancouver.subir(12);
              
        
    }
}
