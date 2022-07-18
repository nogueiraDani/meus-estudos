package Exc_11;

public class App {
    
    public static void main(String[] args) {
        
        float custoDoProduto = 50.00f;
        
        float margemDeLucro = 0.2f;
        
        float valorDeVenda = custoDoProduto + (custoDoProduto * margemDeLucro);
        
        System.out.println(valorDeVenda);
        
        
    }
}
