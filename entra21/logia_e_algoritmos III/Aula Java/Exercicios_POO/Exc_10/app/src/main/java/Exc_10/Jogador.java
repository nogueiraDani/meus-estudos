package Exc_10;

import java.util.Calendar;

public class Jogador {

    private String nome;
    private String posicao;
    private int anoNascimento;
    private String nascionalidade;
    private float altura;
    private float peso;

    public Jogador(String nome, String posicao, int anoNascimento, String nascionalidade, float altura, float peso) {
        this.nome = nome;
        this.posicao = posicao;
        this.anoNascimento = anoNascimento;
        this.nascionalidade = nascionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    public String getNome() {
        return nome;
    }

    public String getPosicao() {
        return posicao;
    }

    public int getAnoNascimento() {
        return anoNascimento;
    }

    public String getNascionalidade() {
        return nascionalidade;
    }

    public float getAltura() {
        return altura;
    }

    public float getPeso() {
        return peso;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    public void setAnoNascimento(Calendar dataNascimento) {
        this.anoNascimento = anoNascimento;
    }

    public void setNascionalidade(String nascionalidade) {
        this.nascionalidade = nascionalidade;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    private int idadeJogador;

    public int calcularIdade() {
        Calendar hoje = Calendar.getInstance();
        int anoAtual = hoje.get(Calendar.YEAR);
        this.idadeJogador = anoAtual - this.anoNascimento;

        return this.idadeJogador;
    }

    public int calcularAposentadoriaDefesa() {
        return (40 - this.idadeJogador);
    }

    public int calcularAposentadoriaMeioCampo() {
        return (38 - this.idadeJogador);
    }

    public int calcularAposentadoriaAtacante() {
        return (35 - this.idadeJogador);
    }

    public int calcularAposentadoria() {
        return switch (this.getPosicao()) {
            case "Defesa" -> calcularAposentadoriaDefesa();
            case "Meio campo" -> calcularAposentadoriaMeioCampo();
            case "Atacante" -> calcularAposentadoriaAtacante();
            default -> 0;
        };
    }

}
