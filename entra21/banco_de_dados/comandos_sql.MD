sempre usar MAIUSCULO nos comandos // aspas simples


*Para buscar tudo de: nome_da_tabela

SELECT * FROM nome_da_tabela


*Para buscar algo de: nome_da_tabela

SELECT algo, mais_algo FROM nome_da_tabela


*Para buscar tudo de: aluno na matricula 1

SELECT * FROM aluno WHERE matricula = 1


*Para buscar com LIKE textos // sempre usar ''

SELECT matricula, cpf FROM aluno WHERE nome like '%G%'


*Para buscar com = a um numero // somente numero

SELECT * FROM aluno WHERE cpf = 45678945645


*Para buscar usando > < >= <= <> !=

SELECT * FROM aluno WHERE matricula > 2
SELECT * FROM aluno WHERE matricula < 2
SELECT * FROM aluno WHERE matricula >= 2
SELECT * FROM aluno WHERE matricula <= 2
SELECT * FROM aluno WHERE matricula <> 2 // nao igual a 2
SELECT * FROM aluno WHERE matricula != 2 // diferente de 2


*Para buscar usando + - * / %

SELECT * FROM aluno WHERE matricula = 1 + 1
SELECT * FROM aluno WHERE matricula = 2 - 1
SELECT * FROM aluno WHERE matricula = 1 * 2
SELECT * FROM aluno WHERE matricula = 3 / 1
SELECT * FROM aluno WHERE matricula = 4 % 3 // resto da divisão de 4/3


*Para buscar usando AND  / OR  / BETWEEN /  NOT BETWEEN / IN  / NOT IN / IS NULL / IS NOT NULL

SELECT * FROM aluno WHERE matricula > 1 AND matricula < 3
SELECT * FROM aluno WHERE matricula > 1 OR name like 'G%'
SELECT * FROM aluno WHERE matricula BETWEEN 1 AND 3
SELECT * FROM aluno WHERE matricula NOT BETWEEN 1 AND 3
SELECT * FROM aluno WHERE matricula IN (1, 2, 3)
SELECT * FROM aluno WHERE matricula NOT IN (1, 2, 3)
SELECT * FROM aluno WHERE matricula IS NULL
SELECT * FROM aluno WHERE matricula IS NOT Null

*INSERT INTO / UPDATE / DELETE

INSERT INTO aluno(nome, cpf, responsavel) VALUES('Laura', 01597932638, 'Jussara')
UPDATE aluno SET nome='Mariano Garcia', responsavel='Marcio Garcia', cpf=149432165489 WHERE matricula = 2
DELETE FROM aluno WHERE matricula = 4

* JOIN / JOIN com WHERE / JOIN especificando campos / Alias / LEFT OUTER JOIN

* ORDER BY / LIMIT / OFFSET / COUNT / GROUP BY / JOIN, GROUP BY E COUNT juntos / HAVING

*CREATE TABLE / ALTER TABLE / DROP TABLE
