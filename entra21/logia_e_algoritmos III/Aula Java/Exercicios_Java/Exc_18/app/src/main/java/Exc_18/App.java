package Exc_18;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        /* Faça um algoritmo que receba a idade de 75 pessoas e mostre mensagem informando “maior de idade” e
“menor de idade” para cada pessoa. Considere a idade a partir de 18 anos como maior de idade;*/
        Scanner leitor = new Scanner(System.in);
        
        int contador = 1;

        while (contador <= 5) {
            
            System.out.println("Digite idade");
            
            int idade = leitor.nextInt();

            if (idade == 18 || idade >= 18) {

                System.out.println("Maior de idade");
            } else {
                System.out.println("Menor de idade");
            }
            contador++;
        }

    }
}
