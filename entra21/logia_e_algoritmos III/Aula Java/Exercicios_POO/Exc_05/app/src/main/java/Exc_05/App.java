
package Exc_05;

public class App {

    public static void main(String[] args) {
        
        Aluno joao = new Aluno(1, "Joao", 8.0f, 6.0f, 4.0f, "matematica");
        
        System.out.println(joao.calcularMedia());
        
        System.out.println(joao.descobrirNotaFinal());
        
        
    }
}
