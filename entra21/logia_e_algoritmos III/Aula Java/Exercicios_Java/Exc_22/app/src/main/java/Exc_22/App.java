package Exc_22;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        String nomeProduto;
        float precoCusto;
        float precoVenda;

        float totalCusto = 0.0f;
        float totalVenda = 0.0f;
        
        int qtdeProdutos = 3;

        for (int i = 0; i < qtdeProdutos; i++) {

            System.out.println("Digite o nome do produto:");
            nomeProduto = leitor.next();

            System.out.println("Digite o preco de custo:");
            precoCusto = leitor.nextFloat();

            System.out.println("Digite o preco de venda:");
            precoVenda = leitor.nextFloat();

            float resultado = precoVenda - precoCusto;

            if (resultado > 0) {
                System.out.println("O produto " + nomeProduto + " deu lucro de " + (precoVenda - precoCusto));
            } else if (precoCusto == precoVenda) {
                System.out.println("O produto " + nomeProduto + "tem preco de venda igual ao preco de custo");
            } else {
                System.out.println("O produto " + nomeProduto + "deu prejuizo de " + resultado);
            }

            System.out.println("------------------------------------------");

            totalCusto += precoCusto;
            totalVenda += precoVenda;

        }
        
        System.out.println("O total do preco de custo é: " + totalCusto);
        System.out.println("O total do preco de venda é: " + totalVenda);
        
        System.out.println("A media do preco de custo é: " + totalCusto/qtdeProdutos);
        System.out.println("A media do preco de venda é: " + totalVenda/qtdeProdutos);

    }
}
