
package Exc_08;

public class App {

    public static void main(String[] args) {
        
        Data nascMari = new Data(11, 9, 2018);
        
        System.out.println(nascMari.getDia());
        System.out.println(nascMari.getMes());
        System.out.println(nascMari.getAno());
        
        System.out.println("-----------------------");
        
        Data nascDani = new Data(6, 11 , 1989);
        
        System.out.println(nascMari.comparadorDatas(nascDani));
        
        System.out.println(nascDani.getMesExtenso());
        System.out.println(nascMari.getMesExtenso());
        
        System.out.println(nascMari.descobrirAnoBissexto());
        
        System.out.println(nascDani.descobrirAnoBissexto());
        
        nascDani.criarClone();
      
    }
}
