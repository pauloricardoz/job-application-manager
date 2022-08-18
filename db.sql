DROP DATABASE IF EXISTS processos;

CREATE DATABASE IF NOT EXISTS processos;

USE processos;

CREATE TABLE IF NOT EXISTS empresas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS inscricoes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    empresa_id INT NOT NULL,
    data_inscricao DATE NOT NULL,
    data_retorno DATE,
    status VARCHAR(20),
    FOREIGN KEY (empresa_id)
        REFERENCES empresas(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS habilidades (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS inscricao_habilidades (
    id_inscricao INT ,
    id_habilidades INT ,
    FOREIGN KEY (id_inscricao)
        REFERENCES inscricoes(id)
        ON DELETE CASCADE,
	FOREIGN KEY (id_habilidades)
        REFERENCES habilidades(id)
        ON DELETE CASCADE,
        
	PRIMARY KEY (id_inscricao, id_habilidades )
);

INSERT INTO empresas (name)
VALUES ("Trybe"),
       ("SAMBATECH");
       
INSERT INTO habilidades (name,    level ) VALUES ('javascript', "junior");

INSERT INTO inscricoes (empresa_id,data_inscricao ,status) VALUES (1, '2022-03-05', 'aplicado');


INSERT INTO inscricao_habilidades (id_inscricao ,id_habilidades) VALUES (1,1);
