package Exc_20;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        String opcao = "S";

        while (opcao == "S") {

            System.out.println("Digite o anos do seu carro");

            int ano = leitor.nextInt();

            System.out.println("Digite o valor do carro:");

            double valor = leitor.nextDouble();
            
            float descontoCarroVelho = 0.12f;
            float descontoCarroNovo = 0.07f;

            if (ano <= 2000) {                
                System.out.println("Desconto = " + (valor * descontoCarroVelho));
                System.out.println("Valor final = " + (valor - (valor * descontoCarroVelho)));
            } else {
                System.out.println("Desconto = " + (valor * descontoCarroNovo));
                System.out.println("Valor final = " + (valor - (valor * descontoCarroNovo)));
            }

            System.out.println("Calcular outro valor? S ou N");
            opcao = leitor.next();

        }

    }
}
