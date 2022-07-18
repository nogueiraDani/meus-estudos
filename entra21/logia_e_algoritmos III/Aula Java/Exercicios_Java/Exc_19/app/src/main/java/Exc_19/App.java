package Exc_19;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        /* Escreva um algoritmo que leia o nome e o sexo de 56 pessoas e informe o nome e se ela é homem ou
mulher. No final informe total de homens e de mulheres;
         */
        Scanner leitor = new Scanner(System.in);

        int contadorHomem = 0;

        int contadorMulher = 0;

        int contador = 1;

        while (contador <= 56) {

            System.out.println("nome:");

            String nome = leitor.next();

            System.out.println("sexo:");

            String sexo = leitor.next();

            if (null == sexo) {
                System.out.println("Sexo invalido");
            } else switch (sexo) {
                case "f", "F" -> {
                    contadorMulher++;
                    contador++;
                    System.out.println(nome + " = mulher");
                }
                case "M", "m" -> {
                    contadorHomem++;
                    contador++;
                    System.out.println(nome + " = homem");
                }
                default -> System.out.println("Sexo invalido");
            }

        }

        System.out.println(
                "Total de mulheres:" + contadorMulher);
        System.out.println(
                "Total de homens: " + contadorHomem);

    }
}
