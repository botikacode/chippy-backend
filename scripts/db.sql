CREATE DATABASE IF NOT EXISTS chippydb;

USE chippydb;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS petJobs;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS customers;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    lastName VARCHAR(255),
    firstName VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    web VARCHAR(255),
    isShelter BOOL
);
CREATE TABLE IF NOT EXISTS jobs (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    title VARCHAR(255),
    jobType VARCHAR(255),
    price INT NOT NULL,
    description VARCHAR(255),
    requesterId INT,
    interestedId INT,
    CONSTRAINT FkRequester FOREIGN KEY (requesterId) REFERENCES customers(id),
    CONSTRAINT FkInterested FOREIGN KEY (interestedId) REFERENCES customers(id)
);
CREATE TABLE IF NOT EXISTS pets (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    petName VARCHAR(255),
    petType VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    ownerId INT,
    CONSTRAINT FkOwner FOREIGN KEY (ownerId) REFERENCES customers(id)
);
CREATE TABLE IF NOT EXISTS petJobs (
	id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    petId INT,
    jobId INT,
    CONSTRAINT FkPetPetjob FOREIGN KEY (petId) REFERENCES pets(id),
    CONSTRAINT FkJobPetJob FOREIGN KEY (jobId) REFERENCES jobs(id)
);
CREATE TABLE IF NOT EXISTS comments (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    content VARCHAR(1000),
    profileOwnerId INT,
    commentatorId INT,
    CONSTRAINT FkProfileOwner FOREIGN KEY (profileOwnerId) REFERENCES customers(id),
    CONSTRAINT FkCommentWriter FOREIGN KEY (commentatorId) REFERENCES customers(id)
);
INSERT INTO customers (lastName, firstName, address, city, image, description, phone, email, password, web, isShelter) VALUES
  ('Doe', 'John', 'Calle calle', 'Valencia','URLImage','Hi Im John Doe', '123456789','JohnDoe@gmail.com','123', 'JohnDoe.com', False ),
  ('Aer', 'Mathieu', 'Calle Mat', 'Barcelona','URLImage','Hi Im Mathieu', '987654321','MathieuAer@gmail.com','123', 'Mathieu.com', False );
INSERT INTO jobs (title, jobType, price, description, requesterId, interestedId) VALUES
  ('Pasear a Ramiro','Walk', '30', 'Ramiro, el perro cosmico',1, 2);
INSERT INTO jobs (title, jobType, price, description, requesterId) VALUES
  ('Pasear a Sarna','Walk', '50', 'Siempre te acompaña',1),
  ('Pasear a Cochambroso','Walk', '20', 'Algo viejo, pero con ganas de darlo todo',1),
  ('Sacar a Pelusa','Walk', '10', 'Pequeña pero peluda',1),
  ('Sacar a Daro','Walk', '35', 'Grande pero raro',1),
  ('Sacar a Cauciono','Walk', '25', 'Alimaña sin pelo', 1);
INSERT INTO pets (petName, petType, description, image, ownerId) VALUES
  ('Ramiro', 'Dog', 'A doggo', 'URLPetImage', 1);
INSERT INTO petJobs (petId, jobId) VALUES
  (1, 1);
INSERT INTO comments (content, profileOwnerId, commentatorId) VALUES
  ("Esto es un comentario de prueba", 1, 2);
