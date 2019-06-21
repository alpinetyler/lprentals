CREATE TABLE rentals(
    id SERIAL PRIMARY KEY,
    imageurl VARCHAR,
    price DECIMAL,
    bd INT,
    bth INT, 
    sqfeet INT,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    zip VARCHAR,
    lotsize DECIMAL
);

CREATE TABLE renters(
id SERIAL PRIMARY KEY,
name VARCHAR,
birthdate DATE,
SSN VARCHAR,
spousename VARCHAR,
isadmin BOOLEAN,
email VARCHAR,
password VARCHAR,
rentalid INT REFERENCES rentals(id)
);

CREATE TABLE appliances(
id SERIAL PRIMARY KEY,
name VARCHAR,
brand VARCHAR,
datepurchased DATE,
serialnumber VARCHAR,
rentalid INT REFERENCES rentals(id)
);

CREATE TABLE payments(
id SERIAL PRIMARY KEY,
datepurchased DATE,
amount DECIMAL
);

CREATE TABLE expenses(
id SERIAL PRIMARY KEY,
name VARCHAR,
date DATE,
amount DECIMAL,
category VARCHAR,
rentalid INT REFERENCES rentals(id)
);

CREATE TABLE messages(
id SERIAL PRIMARY KEY,
title VARCHAR,
text TEXT,
date DATE
);

CREATE TABLE renterpayments(
rentalid INT REFERENCES rentals(id),
renterid INT REFERENCES renters(id)
);

CREATE TABLE rentermessages(
messageid INT REFERENCES messages(id),
renterid INT REFERENCES renters(id)
);


