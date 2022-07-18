package Exc_08;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Informe a cotacao do Dolar:");
        
        float cotacao = leitor.nextFloat();
        
        System.out.println("Informe o valor em Dolares:");
        
        float valorEmDolar = leitor.nextFloat();
        
        float valorEmReais = valorEmDolar / cotacao;
        
        System.out.println("---------------------------");
        
        System.out.println("O valor convertido em R$"+ valorEmReais);
        
    }
}
