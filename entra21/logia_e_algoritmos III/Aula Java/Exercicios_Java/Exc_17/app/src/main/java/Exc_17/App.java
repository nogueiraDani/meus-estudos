package Exc_17;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        //Leia 80 números e ao final informar quantos número(s) est(á)ão no intervalo entre 10 (inclusive) e 150 (inclusive); */
        Scanner leitor = new Scanner(System.in);

        int contador = 1;

        int contadorTotal = 0;

        while (contador <= 5) {
            System.out.println("Digite numero:");

            int numero = leitor.nextInt();

            if (numero >= 10 && numero <= 150) {
                contadorTotal++;
                contador++;
            } else {
                contador++;

            }
        }
        System.out.println("total de valores entre 10 e 150 = " + contadorTotal);
    }
}
