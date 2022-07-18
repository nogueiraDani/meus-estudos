
package Exc_07;

public class App {

    public static void main(String[] args) {
        
        Funcionario jose = new Funcionario("Jose", "Tadeu", 1500.00f);
        
        System.out.println(jose.getNome() + ", salario anual: " + jose.descobrirSalarioAnual());
        
        Funcionario maria = new Funcionario("Maria", "Manuela", 1000.00f);
        
        System.out.println(maria.getNome() + ", salario anual: " + maria.descobrirSalarioAnual());
        
        jose.setSalario((jose.getSalario() + (jose.getSalario() * 0.10f)));
        
        System.out.println(jose.getNome() + ", novo salario: " + jose.getSalario());
        
        maria.setSalario(maria.getSalario() + (maria.getSalario() * 0.10f));
        
        System.out.println(maria.getNome() + ", novo salario: " + maria.getSalario());
    }
}
