package Exc_07;

public class Funcionario {

    private String nome;
    private String sobrenome;
    private float salario;

    public Funcionario(String nome, String sobrenome, float salario) {
        this.setNome(nome);
        this.setSobrenome(sobrenome);
        this.setSalario(salario);
    }

    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public float getSalario() {
        return salario;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public void setSalario(float salario) {

        if (salario < 0) {
            this.salario = 0;
        } else {
            this.salario = salario;
        }
    }
    
    public float descobrirSalarioAnual() {
        return this.salario * 12; 
        
    }
    
    

}
