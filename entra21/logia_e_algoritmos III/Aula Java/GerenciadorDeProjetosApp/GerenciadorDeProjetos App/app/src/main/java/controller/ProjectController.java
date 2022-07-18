package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import model.Project;
import util.ConnectionFactory;


public class ProjectController {

    public void save(Project project) {
        String sql = "INSERT INTO projects("
                + " name,"
                + " description,"
                + " createdAt,"
                + " updatedAt) "
                + "VALUES (?, ?, ?, ?)";

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            //Cria uma conex�o com o banco
            conn = ConnectionFactory.getConnection();
            //Cria um PreparedStatment, classe usada para executar a query
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, project.getName());
            stmt.setString(2, project.getDescription());
            stmt.setDate  (3, new java.sql.Date(project.getCreatedAt().getTime()));
            stmt.setDate  (4, new java.sql.Date(project.getUpdatedAt().getTime()));

            //Executa a sql para inser��o dos dados
            stmt.execute();
        } catch (SQLException ex) {
            throw new RuntimeException("Erro ao salvar a projeto " + ex.getMessage(), ex);
        } finally {
            //Fecha as conex�es
            ConnectionFactory.closeConnection(conn, stmt);
        }

    }
    
    public void update(Project project) {

        String sql = "UPDATE projects SET "
                + "name = ?, "
                + "description = ?, "
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
            
            stmt.setString  (1, project.getName());
            stmt.setString  (2, project.getDescription());
            stmt.setDate    (3, new java.sql.Date(project.getCreatedAt().getTime()));
            stmt.setDate    (4, new java.sql.Date(project.getUpdatedAt().getTime()));
            stmt.setInt     (5, project.getId());

            //Executa a sql para inser��o dos dados
            stmt.execute();
        } catch (SQLException ex) {
            throw new RuntimeException("Erro em atualizar a projeto", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }
    }
    
    public void removeById(int id) {

        String sql = "DELETE FROM projects WHERE id = ?";

        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConnectionFactory.getConnection();
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.execute();
        } catch (SQLException ex) {
            throw new RuntimeException("Erro ao deletar a projeto", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }

    }
    
    public List<Project> getAll() {
        String sql = "SELECT * FROM projects";

        List<Project> projects = new ArrayList<>();

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

                Project project = new Project();

                project.setId(rset.getInt("id"));
                project.setName(rset.getString("name"));
                project.setCreatedAt(rset.getDate("createdAt"));
                project.setCreatedAt(rset.getDate("updatedAt"));

                //Adiciono o contato recuperado, a lista de contatos
                projects.add(project);
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Erro ao buscar as tarefas", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt);
        }
        return projects;
    }
    
    public List<Project> getByProjectId(int id) {
        String sql = "SELECT * FROM tasks WHERE idProject = ?";

        List<Project> projects = new ArrayList<>();

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
                
                Project project = new Project();

                project.setId(rset.getInt("id"));
                project.setName(rset.getString("name"));
                project.setCreatedAt(rset.getDate("createdAt"));
                project.setCreatedAt(rset.getDate("updatedAt"));

                //Adiciono o contato recuperado, a lista de contatos
                projects.add(project);
                
            }
        } catch (SQLException ex) {
            throw new RuntimeException("Erro ao buscar as tarefas", ex);
        } finally {
            ConnectionFactory.closeConnection(conn, stmt, rset);
        }
        return projects;
    }

}
