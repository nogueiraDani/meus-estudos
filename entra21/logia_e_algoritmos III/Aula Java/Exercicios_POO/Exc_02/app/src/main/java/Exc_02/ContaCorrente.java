package Exc_02;


public class ContaCorrente {

    private int numeroConta;
    private String nomeCorrentista;
    private float saldo;

    public ContaCorrente(int numeroConta, String nomeCorrentista, float saldo) {
        this.setNumeroConta(numeroConta);
        this.setNomeCorrentista(nomeCorrentista);
        this.setSaldo(saldo);
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public String getNomeCorrentista() {
        return nomeCorrentista;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }

    public void setNomeCorrentista(String nomeCorrentista) {
        this.nomeCorrentista = nomeCorrentista;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public void alterarNome(String x) {

        setNomeCorrentista(x);
        
    }
    
    public void deposito(float x){
        
        saldo = saldo + x;
        
    }
    
    public void saque(float x) {
        
        saldo = saldo - x;
    }

}
