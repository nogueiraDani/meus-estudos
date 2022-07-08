package Exc_06;

public class App {

    public static void main(String[] args) {
        
        Invoice teste = new Invoice(001, "Teclado", 15, 15.50f);
        
        System.out.println("Codigo do Item: " + teste.getCodigoItem());
        System.out.println("Descricao do Item: " + teste.getDescricaoItem());
        System.out.println("Quantidade de Itens: " + teste.getQuantidadeItem());
        System.out.println("Preco de Item: " + teste.getPrecoUnitarioItem());
        
        System.out.println("--------------------------------------------");
        
        System.out.println("Total da fatura: " + teste.getInvoiceAmount());      
        
        
    }
}
