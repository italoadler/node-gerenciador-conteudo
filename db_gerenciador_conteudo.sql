create database db_gerenciador_conteudo;

use db_gerenciador_conteudo;

create table publicacoes (
    id_publicacao int not null primary key auto_increment,
    titulo varchar(80),
    texto text,
    data_criacao timestamp default current_timestamp
);