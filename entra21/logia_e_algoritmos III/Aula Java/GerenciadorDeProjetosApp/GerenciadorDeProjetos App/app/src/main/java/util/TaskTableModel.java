package util;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import javax.swing.table.AbstractTableModel;
import model.Task;

public class TaskTableModel extends AbstractTableModel {

    String[] colunas = {"Nome", "Descrição", "Prazo", "Tarefa cnoncluida", "Editar", "Apagar"};

    List<Task> tarefas = new ArrayList<>();

    public String[] getColunas() {
        return colunas;
    }

    public List<Task> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<Task> tarefas) {
        this.tarefas = tarefas;
    }

    @Override
    public int getRowCount() {
        return tarefas.size();

    }

    @Override
    public int getColumnCount() {
        return colunas.length;
    }

    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        switch (columnIndex) {
            case 0:
                return tarefas.get(rowIndex).getName();
            case 1:
                return tarefas.get(rowIndex).getDescription();
            case 2:
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
                return simpleDateFormat.format(tarefas.get(rowIndex).getDeadline());
            case 3:
                return tarefas.get(rowIndex).isIsCompleted();
            case 4:
                return "";
            case 5:
                return "";
            default:
                return "Dado não encontrado";
        }

    }

    @Override
    public String getColumnName(int columnIndex) {
        return colunas[columnIndex];
    }

    @Override
    public boolean isCellEditable(int rowIndex, int columnIndex) {
        return columnIndex == 3;

    }
    
    @Override
    public Class<?> getColumnClass(int columnIndex) {
        if (tarefas.isEmpty()) {
            return Object.class;
        }
        return getValueAt(0, columnIndex).getClass();
    }
    
    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
        tarefas.get(rowIndex).setIsCompleted((boolean) aValue);
    }
    
    public void addRow(Task task) {
        this.tarefas.add(task);
    }

}
