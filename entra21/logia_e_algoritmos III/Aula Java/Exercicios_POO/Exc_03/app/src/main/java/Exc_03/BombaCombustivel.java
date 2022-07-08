package Exc_03;

public class BombaCombustivel {

    private String tipoCombustivel;
    private float valorPorLitro;
    private float quatidadeDeLitros;

    public BombaCombustivel(String tipoCombustivel, float valorPorLitro, float quatidadeDeLitros) {
        this.setTipoCombustivel(tipoCombustivel);
        this.setValorPorLitro(valorPorLitro);
        this.setQuatidadeDeLitros(quatidadeDeLitros);
    }

    public String getTipoCombustivel() {
        return tipoCombustivel;
    }

    public float getValorPorLitro() {
        return valorPorLitro;
    }

    public float getQuatidadeDeLitros() {
        return quatidadeDeLitros;
    }

    public void setTipoCombustivel(String tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }

    public void setValorPorLitro(float valorPorLitro) {
        this.valorPorLitro = valorPorLitro;
    }

    public void setQuatidadeDeLitros(float quatidadeDeLitros) {
        this.quatidadeDeLitros = quatidadeDeLitros;
    }

    public void abastecerPorValor(float x) {

        System.out.println("Com R$" + x + "voce abastece: " + (x / valorPorLitro) + " litros");
    }

    public void abastecerPorLitro(float x) {

        System.out.println("Para abastecer " + x + " litros, voce gastara R$" + (x * valorPorLitro));
    }

    public void alterarValorLitro(float x) {

        this.setValorPorLitro(x);

    }

    public void alterarTipoDeCombustivel(String x) {

        this.setTipoCombustivel(x);

    }
    
    public void alterarQuantidadeCombustivel (float x) {
        
        this.setQuatidadeDeLitros(x);
    }

}
