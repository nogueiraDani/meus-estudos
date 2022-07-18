package Exc_05;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        System.out.println("Escreva seu nome:");

        String nome = leitor.next();

        System.out.println("Informe a nota da 1º prova:");

        float primeiraProva = leitor.nextFloat();

        System.out.println("Informe a nota da 2º prova:");

        float segundaProva = leitor.nextFloat();

        System.out.println("Informe a nota da 3º prova:");

        float terceiraProva = leitor.nextFloat();

        float mediaProvas = ((primeiraProva + segundaProva + terceiraProva) / 3);

        System.out.println(nome + ", sua nota media foi:" + mediaProvas);

    }
}
