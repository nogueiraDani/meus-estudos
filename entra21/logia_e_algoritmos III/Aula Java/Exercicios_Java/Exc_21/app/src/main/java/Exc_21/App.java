package Exc_21;

/* Escreva um algoritmo que leia os dados de “N” pessoas (nome, sexo, idade e saúde) e informe se está apta
ou não para cumprir o serviço militar obrigatório. Informe os totais; */

import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        
        Scanner leitor = new Scanner(System.in);
        
        int contador = 1;
        int contadorMilitar = 0;
        
        while (contador <= 3) {
            
            System.out.println("Nome:");
            
            String nome = leitor.next();
            
            System.out.println("Sexo: F ou M");
            
            String sexo = leitor.next();
            
            System.out.println("idade");
            
            int idade = leitor.nextInt();
            
            System.out.println("Saude ok? S ou N");
            
            String saude = leitor.next();
            
            if (idade >= 18) {
                if ("M".equals(sexo) || "m".equals(sexo)) {
                    if ("S".equals(saude) || "s".equals(saude)) {
                        contadorMilitar++;
                    }
                }
            }
            contador++;
        }
        
        System.out.println(contadorMilitar);
        
        
        
    }
}
