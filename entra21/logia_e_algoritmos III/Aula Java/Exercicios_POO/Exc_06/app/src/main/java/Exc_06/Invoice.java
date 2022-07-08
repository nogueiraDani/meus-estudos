package Exc_06;

public class Invoice {

    private int codigoItem;
    private String descricaoItem;
    private int quantidadeItem;
    private float precoUnitarioItem;

    public Invoice(int codigoItem, String descricaoItem, int quantidadeItem, float precoUnitarioItem) {
        this.setCodigoItem(codigoItem);
        this.setDescricaoItem(descricaoItem);
        this.setQuantidadeItem(quantidadeItem);
        this.setPrecoUnitarioItem(precoUnitarioItem);
    }
    
    public double getInvoiceAmount() {
        return quantidadeItem * precoUnitarioItem;
    }

    public int getCodigoItem() {
        return codigoItem;
    }

    public String getDescricaoItem() {
        return descricaoItem;
    }

    public int getQuantidadeItem() {
        return quantidadeItem;
    }

    public float getPrecoUnitarioItem() {
        return precoUnitarioItem;
    }

    public void setCodigoItem(int codigoItem) {
        this.codigoItem = codigoItem;
    }

    public void setDescricaoItem(String descricaoItem) {
        this.descricaoItem = descricaoItem;
    }

    public void setQuantidadeItem(int quantidadeItem) {

        if (quantidadeItem < 0) {
            this.quantidadeItem = 0;
        } else {
            this.quantidadeItem = quantidadeItem;
        }
    }

    public void setPrecoUnitarioItem(float precoUnitarioItem) {

        if (precoUnitarioItem < 0) {
            this.precoUnitarioItem = 0;
        } else {
            this.precoUnitarioItem = precoUnitarioItem;
        }
    }

}
