--cria o banco de dados e o nomeia (sem verificação prévia)
-- "create database banco2610"

use banco2610 --selciona o banco
 create table Cidades --cria tabela
 (
ID int primary key, 
 Nome varchar(100) not null, --não pode ser vazio
 UF varchar (2) not null --não pode ser vazio
 )


select * from --comando primeiro, tabela selecionada depois
Cidades
order by Nome desc --ordenar Nome por order descendente

