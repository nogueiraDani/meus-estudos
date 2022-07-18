package Exc_09;

public class Voo {

    private int numeroDoVoo;
    private boolean[] lugaresLivres = new boolean[10];
    private boolean[] lugaresOcupados = new boolean[10];
    private boolean[] lugaresVendidos = new boolean[10];

    public int getNumeroDoVoo() {
        return numeroDoVoo;
    }

    public boolean[] getLugaresLivres() {
        return lugaresLivres;
    }

    public boolean[] getLugaresOcupados() {
        return lugaresOcupados;
    }

    public boolean[] getLugaresVendidos() {
        return lugaresVendidos;
    }
    

    public void setNumeroDoVoo(int numeroDoVoo) {
        this.numeroDoVoo = numeroDoVoo;
    }

    public void setLugaresLivres(boolean[] lugaresLivres) {
        this.lugaresLivres = lugaresLivres;
    }

    public void setLugaresOcupados(boolean[] lugaresOcupados) {
        this.lugaresOcupados = lugaresOcupados;
    }

    public void setLugaresVendidos(boolean[] lugaresVendidos) {
        this.lugaresVendidos = lugaresVendidos;
    }
    
    

    public Voo(int numeroDoVoo) {
        this.numeroDoVoo = numeroDoVoo;  
    }

    public void iniciarVendas() {
        for (int i = 0; i < this.lugaresLivres.length; i++) {
            this.lugaresLivres[i] = true;
        }
        for (int i = 0; i < this.lugaresOcupados.length; i++) {
            this.lugaresOcupados[i] = false;
        }
        for (int i = 0; i < this.lugaresVendidos.length; i++) {
            this.lugaresVendidos[i] = false;
        }

    }

    public void ocuparAssento(int x) {
        if (this.lugaresLivres[x - 1] == true) {
            this.lugaresLivres[x - 1] = false;
            this.lugaresOcupados[x - 1] = true;
            this.lugaresVendidos[x - 1] = true;
        }
    }

    public int descobrirProximoLivre(int x) {
        if (this.lugaresOcupados[x - 1] == true) {
            for (int i = x - 1; i < this.lugaresOcupados.length; i++) {
                if (this.lugaresOcupados[i] == false) {
                    return i+1;
                }
            }

        }
        return 0;
    }

    public int descobrirLugaresVagos() {
        int lugaresLivres = 0;
        for (int i = 0; i < this.lugaresLivres.length; i++) {
            if (this.lugaresLivres[i] == true) {
                lugaresLivres++;
            }
        }
        return lugaresLivres;
    }
    
    public boolean verificarLugarVago(int x){
        if(this.lugaresLivres[x-1] == true) {
            return true;
        } else {
            return false;
        }
    }

}
