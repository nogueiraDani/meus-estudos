package Exc_01;

public class Pessoa {

    private String nome;
    private int anoNascimento;
    private float altura;

    public Pessoa(String nome, int anoNascimento, float altura) {
        this.setNome(nome);
        this.setAnoNascimento(anoNascimento);
        this.setAltura(altura);
    }
        

    public void imprimirNome() {
        System.out.println("Nome: " + this.getNome());
    }

    public void imprimirAnoNascimento() {
        System.out.println("Data de nascimento: " + getAnoNascimento());
    }

    public void imprimirAltura() {
        System.out.println("Altura: " + getAltura());
    }

    public void imprimirIdade(int x) {
        System.out.println("Idade: " + (x - this.getAnoNascimento())); 
    }

    public String getNome() {
        
        return nome;
    }

    public int getAnoNascimento() {
        return anoNascimento;
    }

    public float getAltura() {
        return altura;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setAnoNascimento(int anoNascimento) {
        this.anoNascimento = anoNascimento;
    }    

    public void setAltura(float altura) {
        this.altura = altura;
    }

}
