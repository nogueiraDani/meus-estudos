package HelloWorld_Java;

public class App {
    public String getGreeting() {
        return "Hello World!";
    }

    public static void main(String[] args) {
        System.out.println(new App().getGreeting());
        
        // comentario em linha
        
        /*
        comentario em bloco
        */
        
        /** * comentario para documentação */
    }
}
