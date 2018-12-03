create database db_gerenciador_conteudo;

use db_gerenciador_conteudo;

create table publicacoes (
    id_publicacao int not null primary key auto_increment,
    titulo varchar(80),
    texto text,
    data_criacao timestamp default current_timestamp
);

insert into publicacoes (titulo, texto) values ('Primeira publicação', 'Texto da primeira publicação.');
insert into publicacoes (titulo, texto) values ('Segunda publicação', 'Texto da segunda publicação.');