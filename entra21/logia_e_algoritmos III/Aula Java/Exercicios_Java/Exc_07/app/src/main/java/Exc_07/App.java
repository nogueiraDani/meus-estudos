package Exc_07;

import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Digite a temperatura em Celsius");
        
        float c = leitor.nextFloat();
        
        float f = ((9*c+160)/5);
        
        System.out.println("A temperatura em Fanreinheit é: " + f);     
        
        
    }
}
