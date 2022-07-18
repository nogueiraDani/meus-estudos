package Exc_15;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        int numero;

        Scanner leitorScanner = new Scanner(System.in);

        System.out.println("Digite um valor para verificar:");

        numero = leitorScanner.nextInt();

        if (numero >= 100 && numero <= 200) {
            System.out.println("O numero esta dentro do intervalo");
        } else {
            System.out.println("O numero nao esta dentro do intervalo");
        }

    }
}

