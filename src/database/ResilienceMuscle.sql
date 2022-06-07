CREATE DATABASE resilienceMuscle;

USE resilienceMuscle;

CREATE TABLE usuario (
	idUsuario int primary key auto_increment,
	nome varchar(45),
    sobrenome varchar(45),
	dtNasc date,
    sexo varchar(6),
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
    peso decimal(6,2),
	intensidade varchar(20) check(intensidade = 'Baixa' or intensidade = 'Intermediária' or intensidade = 'Média' or intensidade = 'Submáxima' or intensidade = 'Máxima' or intensidade = 'Supermáxima'),
	repeticoesMax int,
	repeticoesMin int,
    fkUsuario int,
    primary key (idTreino, fkUsuario),
    foreign key (fkUsuario) references usuario(idUsuario)
);

select count(idTreino) from desempenho;
select count(data) from desempenho where fkUsuario = 1;
 insert into desempenho (data, musculo, exercicio, intensidade, peso, repeticoesMax, repeticoesMin, fkUsuario) VALUES 
	('2022/05/01','peito','supino','Submáxima','5','6','15','1'),
	('2022/05/02','costas','terra','Submáxima','10','6','15','1'),
	('2022/05/03','quadríceps','agachamento','Submáxima','15','12','20','1');
    
insert into desempenho (data, musculo, exercicio, intensidade, peso, repeticoesMax, repeticoesMin, fkUsuario) VALUES 
	('2022/05/01','peito','abs','Intermediária','10','30','15','1');     