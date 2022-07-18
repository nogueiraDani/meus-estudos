package Exc_04;

public class Elevador {

    private int andarAtual;
    private int totalAndares;
    private int capacidadeMaxima;
    private int ocupacaoAtual;

    public Elevador(int totalAndares, int capacidadeMaxima) {
        this.setTotalAndares(totalAndares);
        this.setCapacidadeMaxima(capacidadeMaxima);

    }

    public int getAndarAtual() {
        return andarAtual;
    }

    public int getTotalAndares() {
        return totalAndares;
    }

    public int getCapacidadeMaxima() {
        return capacidadeMaxima;
    }

    public int getOcupacaoAtual() {
        return ocupacaoAtual;
    }

    public void setAndarAtual(int andarAtual) {
        this.andarAtual = andarAtual;
    }

    public void setTotalAndares(int totalAndares) {
        this.totalAndares = totalAndares;
    }

    public void setCapacidadeMaxima(int capacidadeMaxima) {
        this.capacidadeMaxima = capacidadeMaxima;
    }

    public void setOcupacaoAtual(int ocupacaoAtual) {
        this.ocupacaoAtual = ocupacaoAtual;
    }

    public void inicializar() {
        setOcupacaoAtual(0);
        setAndarAtual(0);
    }

    public int entrar(int x) {
        if ((ocupacaoAtual + x) <= capacidadeMaxima) {
            return ocupacaoAtual = ocupacaoAtual + x;
        } else {
            return ocupacaoAtual;
        }
    }

    public int sair(int x) {
        if ((ocupacaoAtual - x) >= 1) {
            return ocupacaoAtual = ocupacaoAtual - x;
        } else {
            return ocupacaoAtual;
        }
    }

    public int subir(int x) {
        if ((andarAtual + x) != 24) {
            return andarAtual = andarAtual + x;
        } else {
            return andarAtual;
        }
    }

    public int descer(int x) {
        if ((andarAtual - x) != 0) {
            return andarAtual = andarAtual - x;
        } else {
            return andarAtual;

        }
    }

}
