

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(255) not NULL,
    devoured boolean not NULL default false

);