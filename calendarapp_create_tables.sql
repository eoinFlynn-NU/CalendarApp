CREATE DATABASE calendar_app;
USE calendar_app;

CREATE TABLE user (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    date_joined DATE NOT NULL    
);

CREATE TABLE event (
	event_id INT PRIMARY KEY AUTO_INCREMENT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    event_description VARCHAR(200)
);

CREATE TABLE user_events (
	user INT,
    event INT,
	PRIMARY KEY (user,event),
    CONSTRAINT FOREIGN KEY (user) REFERENCES
		user(user_id) 
        ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT FOREIGN KEY (event) REFERENCES
		event(event_id) 
        ON UPDATE CASCADE ON DELETE CASCADE
);

