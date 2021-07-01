CREATE DATABASE PetWorld;
USE PetWorld;

CREATE TABLE owners(
	id INT auto_increment PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	email VARCHAR(50),
	personalKey VARCHAR(15),
	phoneNumber VARCHAR(15)
);
INSERT INTO owners(firstName,lastName,email,personalKey,phoneNumber) VALUES ('Andres', 'Gonzalez', 'androsogt@gmail.com', 'androso+1234-', '35006115');
INSERT INTO owners(firstName,lastName,email,personalKey,phoneNumber) VALUES ('Pedro', 'Contreras', 'sirpedro@gmail.com', 'holamundo', '41508886');
INSERT INTO owners(firstName,lastName,email,personalKey,phoneNumber) VALUES ('Yuhana', 'Melgar', 'melgar.keyla@gmail.com', 'COD2002','37578639');
SELECT * FROM owners;


CREATE TABLE pets(
	id INT auto_increment PRIMARY KEY,
	ownerID INT FOREIGN KEY REFERENCES owners(id),
	nickname VARCHAR(20),
	age INT,
	species VARCHAR(25)
)

CREATE TABLE dates(
	dateID INT auto_increment PRIMARY KEY,
	ownerID INT FOREIGN KEY REFERENCES owners(id),
	petID INT FOREIGN KEY REFERENCES pets(id),
	scheduleDate DATE,
	symptom TEXT, 
	currentState BIT
)