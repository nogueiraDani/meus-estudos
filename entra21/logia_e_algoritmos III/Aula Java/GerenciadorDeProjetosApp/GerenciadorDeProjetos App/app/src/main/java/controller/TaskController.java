
package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import model.Task;
import util.ConnectionFactory;


public class TaskController {
    
    public void save(Task task) {
        String sql = "INSERT INTO tasks("
                + "idProject,"
                + " name,"
                + " description,"
                + " completed,"
                + " notes,"
                + " deadline,"
                + " createdAt,"
                + " updatedAt) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            //Cria uma conex�o com o banco
            conn = ConnectionFactory.getConnection();
            //Cria um PreparedStatment, classe usada para executar a query
            stmt = conn.prepareStatement(sql);

            stmt.setInt(1, task.getIdProject());
            stmt.setString(2, task.getName());
            stmt.setString(3, task.getDescription());
            stmt.setBoolean(4, task.isIsCompleted());
            stmt.setString(5, task.getNotes());
            stmt.setDate(6, new java.sql.Date(task.getDeadline().getTime()));
            stmt.setDate(7, new java.sql.Date(task.getCreatedAt().getTime()));
            stmt.setDate(8, new java.sql.Date(task.getUpdatedAt().getTime()));

            //Executa a sql para inser��o dos dados
            stmt.execute();
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao salvar a tarefa " + ex.getMessage(), ex);
        } finally {
            //Fecha as conex�es
           ConnectionFactory.closeConnection(conn, stmt);
        }

    }

    public void update(Task task) {

        String sql = "UPDATE tasks SET "
                + "idProject = ?, "
                + "name = ?, "
                + "description = ?, "
                + "notes = ?, "
                + "deadline = ?, "
                + "completed = ?, "
                + "createdAt = ?, "
                + "updatedAt = ? "
                + "WHERE id = ?";

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            //Cria uma conex�o com o banco
            conn = ConnectionFactory.getConnection();
            //Cria um PreparedStatment, classe usada para executar a query
            stmt = conn.prepareStatement(sql);

            stmt.setInt     (1, task.getIdProject());
            stmt.setString  (2, task.getName());
            stmt.setString  (3, task.getDescription());
            stmt.setString  (4, task.getNotes());
            stmt.setDate    (5, new java.sql.Date(task.getDeadline().getTime()));
            stmt.setBoolean (6, task.isIsCompleted());
            stmt.setDate    (7, new java.sql.Date(task.getCreatedAt().getTime()));
            stmt.setDate    (8, new java.sql.Date(task.getUpdatedAt().getTime()));
            stmt.setInt     (9, task.getId());

            //Executa a sql para inser��o dos dados
            stmt.execute();
        } catch (Exception ex) {
            throw new RuntimeException("Erro em atualizar a tarefa", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }
    }
    
    public void removeById(int id) {

        String sql = "DELETE FROM tasks WHERE id = ?";

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConnectionFactory.getConnection();
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.execute();
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao deletar a tarefa", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }

    }

    public List<Task> getAll() {
        String sql = "SELECT * FROM tasks";

        List<Task> tasks = new ArrayList<>();

        Connection conn = null;
        PreparedStatement stmt = null;

        //Classe que vai recuperar os dados do banco de dados
        ResultSet rset = null;

        try {
            conn = ConnectionFactory.getConnection();
            stmt = conn.prepareStatement(sql);

            rset = stmt.executeQuery();

            //Enquanto existir dados no banco de dados, fa�a
            while (rset.next()) {

                Task task = new Task();

                task.setId(rset.getInt("id"));
                task.setIdProject(rset.getInt("idProject"));
                task.setName(rset.getString("name"));
                task.setDescription(rset.getString("description"));
                task.setNotes(rset.getString("notes"));
                task.setDeadline(rset.getDate("deadline"));
                task.setIsCompleted(rset.getBoolean("completed"));
                task.setCreatedAt(rset.getDate("createdAt"));
                task.setCreatedAt(rset.getDate("updatedAt"));

                //Adiciono o contato recuperado, a lista de contatos
                tasks.add(task);
            }
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao buscar as tarefas", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }
        return tasks;
    }

    public List<Task> getByProjectId(int id) {
        String sql = "SELECT * FROM tasks WHERE idProject = ?";

        List<Task> tasks = new ArrayList<>();

        Connection conn = null;
        PreparedStatement stmt = null;

        //Classe que vai recuperar os dados do banco de dados
        ResultSet rset = null;

        try {
            conn = ConnectionFactory.getConnection();
            stmt = conn.prepareStatement(sql);

            stmt.setInt(1, id);

            rset = stmt.executeQuery();

            //Enquanto existir dados no banco de dados, fa�a
            while (rset.next()) {

                Task task = new Task();

                task.setId(rset.getInt("id"));
                task.setIdProject(rset.getInt("idProject"));
                task.setName(rset.getString("name"));
                task.setDescription(rset.getString("description"));
                task.setNotes(rset.getString("notes"));
                task.setDeadline(rset.getDate("deadline"));
                task.setIsCompleted(rset.getBoolean("completed"));
                task.setCreatedAt(rset.getDate("createdAt"));
                task.setCreatedAt(rset.getDate("updatedAt"));

                //Adiciono o contato recuperado, a lista de contatos
                tasks.add(task);
            }
        } catch (Exception ex) {
            throw new RuntimeException("Erro ao buscar as tarefas", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt, rset);
        }
        return tasks;
    }

    

}
    

