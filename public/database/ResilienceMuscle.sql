CREATE DATABASE resilienceMuscle;

USE resilienceMuscle;

CREATE TABLE usuario (
	id int primary key auto_increment,
	nome varchar(45),
    sobrenome varchar(45),
	dtNasc date,
    email varchar(60),
    senha varchar(30)
);

-- drop database projetoindividual;