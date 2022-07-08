
package Exc_02;

import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Digite o primeiro número:");
        
        float primeiroNumero = leitor.nextFloat();
        
        System.out.println("Digite o segundo número:");
        
        float segundoNumero = leitor.nextFloat();
        
        float soma = primeiroNumero + segundoNumero;
        
        float subtracao = primeiroNumero - segundoNumero;
        
        float multiplicacao = primeiroNumero * segundoNumero;
        
        float divisao = primeiroNumero / segundoNumero;
        
        System.out.println("A soma é:" + soma);
        
        System.out.println("A subtração é: " + subtracao);
        
        System.out.println("A multiplicação é: " + multiplicacao);
        
        System.out.println("A divisão é: " + divisao);       
        
        
    }
}
