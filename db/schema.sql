CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);