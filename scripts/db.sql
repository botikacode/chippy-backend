CREATE DATABASE IF NOT EXISTS chippydb;

USE chippydb;

CREATE TABLE IF NOT EXISTS jobs(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO jobs (title, description, price) VALUES
    ('Pasear a Manchas', 'Pasear a perro muy docil y cariñoso', 10),
    ('Cuidar a Sarna', 'Un perro muy sucio', 50),
    ('Pasear a Pelusa', 'Pasear a perro muy pequeño', 7);