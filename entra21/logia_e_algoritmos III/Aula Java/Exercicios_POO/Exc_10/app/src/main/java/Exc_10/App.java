
package Exc_10;

public class App {

    public static void main(String[] args) {
        
        Jogador teste = new Jogador("Joao", "Atacante", 1990, "Brasileiro", 1.70f, 85f);
        
        System.out.println("Nome: " + teste.getNome());
        System.out.println("Posicao: " + teste.getPosicao());
        System.out.println("Idade: " + teste.calcularIdade());
        System.out.println("Nascionalidade: " + teste.getNascionalidade());
        System.out.println("Altura: " + teste.getAltura());
        System.out.println("Peso: " + teste.getPeso());
        System.out.println("Tempo para aposentar: " + teste.calcularAposentadoria());
    
        
        
    }
}
