CREATE DATABASE resilienceMuscle;

USE resilienceMuscle;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
	nome varchar(45),
    sobrenome varchar(45),
	dtNasc date,
    email varchar(60),
    senha varchar(30),
	classificacao boolean,
    frequencia char(1)
);
select * from usuario;
-- drop database projetoindividual;
CREATE TABLE treino (
	idTreino int auto_increment,
    musculo varchar (20) check (musculo = "peito" or
								musculo = "costas" or
                                musculo = "bíceps" or
                                musculo = "trapezio" or
                                musculo = "ombros" or
                                musculo = "tríceps" or
                                musculo = "antebraço" or
                                musculo = "abdomen" or
                                musculo = "obliquo" or
                                musculo = "quadriceps" or
                                musculo = "posterior de coxa" or
                                musculo = "panturrilha" or
                                musculo = "gluteo" or
                                musculo = "coluna"),                            
    volume char(2),
    intensidade varchar(20) check (intensidade = "baixa" or
                                   intensidade = "intermediária" or
                                   intensidade = "média" or
                                   intensidade = "submáxima" or
                                   intensidade = "máxima" or
                                   intensidade = "supermáxima"
                                    ),
    repeticoesMax int,
    repeticoesMin int,
    series int,
    fkUsuario int,
    primary key (idTreino, fkUsuario),
    foreign key (fkUsuario) references usuario(idUsuario)
);
 -- alter table treino drop column series;
 -- truncate table usuario;
 
 
 update usuario set classificacao = 0 where idUsuario = 1;
 update usuario set frequencia = 3 where idUsuario = 1;
insert into treino (musculo, volume, intensidade, repeticoesMax, repeticoesMin, fkUsuario) VALUES 
	('peito','3','submáxima','6','15','1'),
	('costas','3','submáxima','6','15','1'),
	('quadríceps','3','submáxima','12','20','1');
 select usuario.nome, treino.*,
							case when classificacao = 0 then 'iniciante' when classificacao = 1  then 'avançado' else classificacao end as 'classificacao'
									from usuario join treino on idUsuario = fkUsuario; 
                                    
CREATE TABLE desempenho (
	idTreino int auto_increment,
    data date,
    musculo varchar (20) check (musculo = "peito" or
								musculo = "costas" or
                                musculo = "bíceps" or
                                musculo = "trapezio" or
                                musculo = "ombros" or
                                musculo = "tríceps" or
                                musculo = "antebraço" or
                                musculo = "abdomen" or
                                musculo = "obliquo" or
                                musculo = "quadriceps" or
                                musculo = "posterior de coxa" or
                                musculo = "panturrilha" or
                                musculo = "gluteo" or
                                musculo = "coluna"),   
	exercicio varchar(40),
	penultimaSerieRepeticoes int,
    penultimaSeriePeso decimal (5,2),
    ultimaSerieRepeticoes int,
    ultimaSeriePeso decimal (5,2),
    fkUsuario int,
    primary key (idTreino, fkUsuario),
    foreign key (fkUsuario) references usuario(idUsuario)
);

 insert into desempenho (data, musculo, exercicio, penultimaSerieRepeticoes, penultimaSeriePeso, ultimaSerieRepeticoes, ultimaSeriePeso, fkUsuario) VALUES 
	('2022/05/01','peito','supino','30','12','30','8','1'),
	('2022/05/01','peito','remada alta','45','12','45','9','1'),
	('2022/05/01','peito','quadríceps','50','15','50','12','1');