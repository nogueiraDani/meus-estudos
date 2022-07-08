package Exc_24;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        char opcao = 'S';

        while (opcao == 'S' || opcao == 's') {

            System.out.println("Digite um valor para conferir:");
            int valor = leitor.nextInt();

            if (valor == 0) {
                System.out.println("O valor é zero");
            } else if (valor > 0) {
                System.out.println("O valor é positivo");
            } else {
                System.out.println("O valor é negativo");
            }

            System.out.println("Deseja verificar outro valor? (S ou N)");

            opcao = leitor.next().charAt(0);

        }

    }
}
