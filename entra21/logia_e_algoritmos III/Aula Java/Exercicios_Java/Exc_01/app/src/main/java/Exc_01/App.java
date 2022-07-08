package Exc_01;

import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Digite um numero:");
        
        float primeiroNumero = leitor.nextFloat();
        
        System.out.println("Digite um segundo numero");
        
        float segundoNumero = leitor.nextFloat();
        
        float soma = primeiroNumero + segundoNumero;
        
        System.out.println("A soma de " + primeiroNumero + " + " + segundoNumero + "é: " + soma);
        
     
    }
}
