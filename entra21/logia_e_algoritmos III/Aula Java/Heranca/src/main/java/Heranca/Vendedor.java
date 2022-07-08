
package Heranca;

import java.util.Date;


public class Vendedor extends Funcionario {

    private double valorComissaoPeca;
    private int totalPecasVendidas;

    public Vendedor(String nome, Date dataNascimento, String cpf, Double salario) {
        super(nome, dataNascimento, cpf, salario);

        this.valorComissaoPeca = 10.0d;
    }
    
    

    @Override
    public Double getSalario() {
        return super.getSalario() + (totalPecasVendidas * valorComissaoPeca);
    }

    public double getValorComissaoPeca() {
        return valorComissaoPeca;
    }

    public void setValorComissaoPeca(double valorComissaoPeca) {
        this.valorComissaoPeca = valorComissaoPeca;
    }

    public int getTotalPecasVendidas() {
        return totalPecasVendidas;
    }

    public void setTotalPecasVendidas(int totalPecasVendidas) {
        this.totalPecasVendidas = totalPecasVendidas;
    }
}

