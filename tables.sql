-- Active: 1674694595000@@35.226.146.116@3306@jbl-4417097-vinicio-oliveira
CREATE TABLE Competicao (
    id INT AUTO_INCREMENT NOT NULL primary key,
    nome VARCHAR(255) unique,
    dataInicio VARCHAR(255),
    dataFim VARCHAR(255)
);

CREATE TABLE Resultados (
    id INT AUTO_INCREMENT NOT NULL primary key,
    nomeAtleta varchar(255),
    valor varchar(255),
    unidade varchar(255),
    competicao_id INT,
    FOREIGN KEY (competicao_id) REFERENCES Competicao (id)
);

