# 5.3 - Acessando Elementos

- Métodos para encontrar um ou mais elementos no DOM.

É possível localizar elementos HTML:

- por ID;
- por data-attribute;
- pelo nome da tag;
- pelo nome da classe;
- por seletores CSS;
- por coleções de objetos HTML.

| Método                                     | Descrição                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| document.getElementById(id)                | Encontra um elemento por seu Id                                                    |
| document.querySelector("[data-attribute]") | Encontra um elemento por seu data-attribute                                        |
| document.getElementsByClassName(nome)      | Encontra um elemento pela classe                                                   |
| document.getElementsByTagName(tag)         | Encontra um elemento pela sua tag HTML                                             |
| document.querySelector(nome)               | Encontra o primeiro elemento com o valor informado (id, nome, tag, data-attribute) |
| document.querySelectorAll(name)            | Encontra todos os elementos com o valor informado (id, nome, tag, data-attribute)  |

[Proximo Capitulo](./4_Alterando-Elementos.md)