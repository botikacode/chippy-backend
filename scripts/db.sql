CREATE DATABASE IF NOT EXISTS chippydb;

USE chippydb;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS petJobs;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS messages;

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
    snowFlakes INT,
    requesterId INT,
    interestedId INT,
    startDate VARCHAR(500),
    endDate VARCHAR(500),
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
    age INT,
    gender VARCHAR(255),
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

CREATE TABLE IF NOT EXISTS messages (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    content VARCHAR(1000),
    userId INT,
    mDate VARCHAR(20),
    chatId INT,
	CONSTRAINT FkUserChat FOREIGN KEY (userId) REFERENCES customers(id)
);

INSERT INTO customers (lastName, firstName, address, city, image, description, phone, email, password, web, isShelter) VALUES
  ('Doe', 'John', 'Calle calle', 'Valencia','URLImage','Hi Im John Doe', '123456789','JohnDoe@gmail.com','123', 'JohnDoe.com', False ),
  ('Aer', 'Mathieu', 'Calle Mat', 'Barcelona','imagenSenyor.jpg','Hi Im Mathieu', '987654321','MathieuAer@gmail.com','123', 'Mathieu.com', False );
INSERT INTO jobs (title, jobType, price, description, requesterId, interestedId) VALUES
  ('Pasear a Ramiro','Walk', '30', 'Ramiro, el perro cosmico',1, 2);
INSERT INTO jobs (title, jobType, price, description, requesterId, startDate, endDate) VALUES
  ('Pasear a Ramiro','Walk', '50', 'Siempre te acompa??a',1,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Pasear a Raula','Walk', '20', 'Algo viejo, pero con ganas de darlo todo',1,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Doggis','Walk', '10', 'Peque??a pero peluda',2,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Blacky','Walk', '35', 'Grande pero raro',1,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Laura','Cuidar', '25', 'Alima??a sin pelo', 1,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Jo','Cuidar', '25', 'Alima??a sin pelo', 2,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Pedro','Cuidar', '10', 'Alima??a sin pelo', 2,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Pucca','Pasear', '25', 'Alima??a sin pelo', 1,'2022-12-01 12:34','2022-12-03 12:34'),
  ('Sacar a Garu','Pasear', '12', 'Alima??a sin pelo', 2,'2022-12-01 12:34','2022-12-03 12:34');
  
INSERT INTO pets (petName, petType, description, image, ownerId,age,gender) VALUES
  ('Ramiro', 'Dog', 'A doggo', 'URLPetImage', 1, 10, 'Macho'),
  ('Raula', 'Dog', ' Salvaje', 'URLPetImage', 2, 10, 'Hembra'),
  ('Doggis', 'Cat', ' Dormilon', 'URLPetImage', 2, 10, 'Macho'),
  ('Blacky', 'Cat', ' Inquieto', 'URLPetImage', 1, 10, 'Macho'),
  ('Laura', 'Dog', 'Le encanta el agua', 'URLPetImage', 1, 10, 'Hembra'),
  ('Jo', 'Dog', 'Le encanta el agua', 'URLPetImage', 2, 10, 'Hembra'),
  ('Pedro', 'Cat', ' Urgente', 'URLPetImage', 1, 10, 'Macho'),
  ('Pucca', 'Dog', 'Conversable $$$', 'URLPetImage', 1, 10, 'Hembra'),
  ('Garu', 'Cat', 'Llevar Veterinario', 'URLPetImage', 2, 10, 'Macho');
  
INSERT INTO petJobs (petId, jobId) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9);
  
INSERT INTO comments (content, profileOwnerId, commentatorId) VALUES
  ("Comentario de prueba 1", 1, 2),
   ("Comentario de prueba 4", 1, 1),
    ("Comentario de prueba 5", 1, 1),
  ("Comentario de prueba 2", 1, 2),
  ("Comentario de prueba 3", 1, 2);
  INSERT INTO messages (content, userId, mDate, chatId) VALUES
  ("Buenos dias", 2, "16/01/2022", 7),
  ("Estoy interesado en tu anuncio", 2, "16/01/2022", 7),
  ("Hola", 1, "16/01/2022", 7),
  ("Probando nueva sala de chat", 1, "16/01/2022", 8);
