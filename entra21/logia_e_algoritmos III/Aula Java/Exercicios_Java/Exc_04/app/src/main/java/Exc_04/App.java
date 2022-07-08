package Exc_04;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Escreva seu nome:");
        
        String nome = leitor.next();
        
        System.out.println("Informe o valor do seu salario fixo:");
        
        float salario = leitor.nextFloat();
        
        System.out.println("Informe a total de vendas realizada durante o mes:");
        
        int totalDeVendas = leitor.nextInt();
        
        float comissao = 0.15f;
        
        float salarioFinal = salario + (totalDeVendas * comissao);
        
        System.out.println(nome + "seu salario fixo é: " + salario + ", e o seu salario final é: " + salarioFinal);

    }
}
