package Exc_03;

import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Informe a distancia percorrida:");
        
        float distancia = leitor.nextFloat();
        
        System.out.println("Informe o total de combustivel gasto:");
        
        float combustivel = leitor.nextFloat();
        
        float consumoMedio = combustivel / distancia;
        
        System.out.println("O consumo medio foi: " + consumoMedio);
    }
}
