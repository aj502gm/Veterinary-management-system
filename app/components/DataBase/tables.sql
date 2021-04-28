CREATE DATABASE PetWorld;
USE PetWorld;

CREATE TABLE owners(
	id INT IDENTITY (1,1) PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	email VARCHAR(50),
	personalKey VARCHAR(15),
	phoneNumber VARCHAR(15),
)

CREATE TABLE pets(
	id INT IDENTITY(1,1) PRIMARY KEY,
	ownerID INT FOREIGN KEY REFERENCES owners(id),
	nickname VARCHAR(20),
	age INT,
	species VARCHAR(25)
)

CREATE TABLE dates(
	dateID INT IDENTITY(1,1) PRIMARY KEY,
	ownerID INT FOREIGN KEY REFERENCES owners(id),
	petID INT FOREIGN KEY REFERENCES pets(id),
	scheduleDate DATE,
	symptom TEXT, 
	currentState BIT
)