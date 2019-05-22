
-- DROP DATABASE IF exists tacos_db;
CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos (
id int NOT NULL AUTO_INCREMENT,
taco_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
