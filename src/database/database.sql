CREATE DATABASE feiraOnine; 

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    product_type VARCHAR(100),
    product_description VARCHAR(300),
    product_price REAL,
    product_stock INTEGER,
    product_producer VARCHAR(100)
);

CREATE TABLE producer(
    producer_id SERIAL PRIMARY KEY,
    producer_name VARCHAR(100),
    producer_email VARCHAR(100),
    producer_cpf VARCHAR(300),
    producer_phone VARCHAR(16),
    producer_address VARCHAR (200)
);