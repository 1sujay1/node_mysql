create database notes_app;
use notes_app;

create table notes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

Insert into notes(title,contents)
values
("Second Note",'This is Second Description'),
("Third Note,'This is Third Description");