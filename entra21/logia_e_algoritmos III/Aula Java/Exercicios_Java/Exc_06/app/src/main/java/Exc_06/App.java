package Exc_06;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Digite um valor para A:");
        
        int a = leitor.nextInt();
        
        System.out.println("Digite um valor para B:");
        
        int b = leitor.nextInt();
        
        int c = b;
        
        b = a;
        
        a = c;
        
        System.out.println("A = " + a + " / B = " + b);
        
    }
}
