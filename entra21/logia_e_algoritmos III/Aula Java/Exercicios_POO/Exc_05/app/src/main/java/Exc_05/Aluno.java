package Exc_05;

public class Aluno extends Disciplina {

    private int matricula;
    private String nome;
    private float primeiraProva;
    private float segundaNota;
    private float notaTrabalho;

    public Aluno(int matricula, String nome, float primeiraProva, float segundaNota, float notaTrabalho, String disciplina) {
        super(disciplina);
        this.setMatricula(matricula);
        this.setNome(nome);
        this.setPrimeiraProva(primeiraProva);
        this.setSegundaNota(segundaNota);
        this.setNotaTrabalho(notaTrabalho);
    }

    public int getMatricula() {
        return matricula;
    }

    public String getNome() {
        return nome;
    }

    public float getPrimeiraProva() {
        return primeiraProva;
    }

    public float getSegundaNota() {
        return segundaNota;
    }

    public float getNotaTrabalho() {
        return notaTrabalho;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPrimeiraProva(float primeiraProva) {
        this.primeiraProva = primeiraProva;
    }

    public void setSegundaNota(float segundaNota) {
        this.segundaNota = segundaNota;
    }

    public void setNotaTrabalho(float notaTrabalho) {
        this.notaTrabalho = notaTrabalho;
    }
    
    public float somarNotas() {
        return ((primeiraProva * 2.5f) + (segundaNota * 2.5f) + (notaTrabalho * 2.0f));
    }

    public float calcularMedia() {
        float media = somarNotas() / (2.5f + 2.5f + 2.0f);
        return media;

    }
    
    public float descobrirNotaFinal() {
        if (calcularMedia() > 7.0f) {
            return 0.0f;
        } else {
            return (66.5f - somarNotas()) / 2.5f;
        }
    }

}
