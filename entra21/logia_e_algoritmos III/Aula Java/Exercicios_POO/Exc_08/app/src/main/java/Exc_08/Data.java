package Exc_08;

public class Data {

    private int dia;
    private int mes;
    private int ano;

    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAno() {
        return ano;
    }

    public void setDia(int dia) {
        if (this.dia > 31) {
            this.dia = 01;
        } else if (this.mes == 2 && this.dia > 29) {
            this.dia = 01;
        } else {
            this.dia = dia;
        }
    }

    public void setMes(int mes) {
        if (this.mes > 12) {
            this.mes = 01;
        }
        this.mes = mes;
    }

    public void setAno(int ano) {
        if (this.dia > 31) {
            this.ano = 0001;
        } else if (this.mes == 2 && this.dia > 29) {
            this.ano = 0001;
            this.ano = ano;
        } else {
            this.ano = ano;
        }

    }

    public Data(int dia, int mes, int ano) {
        this.setDia(dia);
        this.setMes(mes);
        this.setAno(ano);
    }

    public int comparadorDatas(Data x) {
        if (x.ano > this.ano) {
            return -1;
        } else if (x.ano == this.ano) {
            if (x.mes > this.mes) {
                return -1;
            } else if (x.mes == this.mes) {
                if (x.dia > this.dia) {
                    return -1;
                } else if (x.dia == this.dia) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }

    public String getMesExtenso() {
        switch (this.mes) {
            case 1 -> {
                return "Janeiro";
            }
            case 2 -> {
                return "Fevereiro";
            }
            case 3 -> {
                return "Marco";
            }
            case 4 -> {
                return "Abril";
            }
            case 5 -> {
                return "Maio";
            }
            case 6 -> {
                return "Junho";
            }
            case 7 -> {
                return "Julho";
            }
            case 8 -> {
                return "Agosto";
            }
            case 9 -> {
                return "Setembro";
            }
            case 10 -> {
                return "Outubro";
            }
            case 11 -> {
                return "Novembro";
            }
            case 12 -> {
                return "Dezembro";
            }
            default ->
                throw new AssertionError();
        }
    }

    public boolean descobrirAnoBissexto() {
        if (this.ano % 400 == 0) {
            return true;
        } else if (this.ano % 100 == 0) {
            return false;
        } else if (this.ano % 4 == 0) {
            return true;
        }
        return false;
    }

    public Object criarClone() {
        Data clone = new Data(this.dia, this.mes, this.ano);
        return clone;
    }

}
