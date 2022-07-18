package EstruturasDeSelecao;

/**
 *
 * @author Marcio Michelluzzi
 */
public class Main {

    public static void main(String[] args) {

        //ESTRUTURAS DE SELE��O
        //======================================================================
        /*
            Como voc� j� deve ter visto, estruturas de sele��o servem para
            fazer desvios pelo c�digo, fazendo com que trechos de c�digo sejam
            executados ou ignorados durante a a execu��o dependendo de uma 
            condi��o previamente definida.
            Em Java existem duas estruturas de sele��o:
            
            1 - if (Correspondente ao "se" no portugol)
            2 - switch (Correspondente ao "caso" no portugol)
        
            Em ambas estruturas � possivel utilizar os operadores relacionais e
            l�gicos
        
            Os operadores relacionais existentes na linguagem s�o:
            1 - Maior           (>) 
            2 - Maior ou igual  (>=)
            3 - Menor           (<)
            4 - Menor ou igual  (<=) 
            5 - Diferente       (!=)
            6 - Igual           (==)
        
            Os operadores l�gicos existentes na linguagem s�o:
            1 - Operador E      (&&)
            2 - Operador OU     (||)
            3 - Operador N�O    (!)
        
            Preced�ncia dos Operadores:
            Ordem 	Tipo de Operador 	Preced�ncia
            1           P�s Fixo                expr++   expr�
            2           Pr� fixo e Un�rio       ++expr   �expr   +expr   -expr   !
            3           Multiplicativo          *    /    %
            4           Aditivo                 +    �
            5           Relacional              >    >=    <=    <
            6           Igualdade               ==    !=
            7           AND L�gico              &&
            8           OR L�gico               ||
            9           Atribui��o              =   +=   -=   *=   /=   %=
         */
        //======================================================================
        // ESTRUTURA IF
        //======================================================================
        /*
            A estrutura if pode ser montada de forma simples ou aninhada.
         */
        //Exemplo de estrutura simples
        int media = 7;

        if (media >= 7) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Aprovado");
        }

        //Exemplo de estrututa aninhada
        if (media >= 7) {
            System.out.println("Aprovado");
        } else {
            if (media >= 5) {
                System.out.println("Em recupera��o");
            } else {
                System.out.println("Reprovado");
            }
        }
        //======================================================================

        // ESTRUTURA SWITCH
        //======================================================================
        /* 
            A estrutura de sele��o switch testa o valor contido em uma vari�vel 
            e o compara com os valores fornecidos em cada caso, representados pela
            palavra reservada case. Podemos ter quantos casos forem necess�rios
            na estrutura, e quando um dos valores corresponder ao da vari�vel de
            teste, todo o c�digo que est� dentro daquele bloco do caso ser� 
            executado.
        
            A v�riavel que ser� utilizada no controle da estrutura pode ser dos
            tipos primitivos como: int, char, byte e tamb�m do tipo String (
            n�o s�o permitidos tipos como float, double pois estes trabalham
            com n�meros com casas decimais)
        
         */
        int codigoProduto = 1;
        switch (codigoProduto) {
            case 1:
                System.out.println("Produto 1");
                break;

            case 2:
                System.out.println("Produto 2");
                break;

            case 3:
                System.out.println("Produto 3");
                break;

            default:

        }
    }

}
