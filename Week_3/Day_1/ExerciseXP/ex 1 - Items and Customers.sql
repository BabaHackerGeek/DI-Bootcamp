/*
🌟 Exercise 1 : Items and Customers

1. Create a database called 'public'.
2. Add two tables: 'items' and 'customers'.

3. Follow the instructions below to determine which columns and data types to add to the two tables:

   Add the following items to the 'items' table:
   1 - Small Desk – 100 (ie. price)
   2 - Large Desk – 300
   3 - Fan – 80

   Add 5 new customers to the 'customers' table:
   1 - Greg - Jones
   2 - Sandra - Jones
   3 - Scott - Scott
   4 - Trevor - Green
   5 - Melanie - Johnson

4. Use SQL to fetch the following data from the database:
   - All the items.
   - All the items with a price above 80 (80 not included).
   - All the items with a price below 300 (300 included).
   - All customers whose last name is ‘Smith’ (What will be your outcome?).
   - All customers whose last name is ‘Jones’.
   - All customers whose first name is not ‘Scott’.
*/


-- Create the public database
CREATE DATABASE public;

-- Use the public database
\c public;

-- Create the items table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Insert data into the items table
INSERT INTO items (name, price) VALUES(
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80));

-- Insert data into the customers table
INSERT INTO customers (first_name, last_name) VALUES(
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson'));

-- 1. Retrieve all items
SELECT * FROM items;

-- 2. Retrieve all items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- 3. Retrieve all items with a price below 300 (300 included)
SELECT * FROM items WHERE price <= 300;

-- 4. Retrieve all customers whose last name is 'Smith'
-- (This will return no results because there are no customers with the last name 'Smith')
SELECT * FROM customers WHERE last_name = 'Smith';

-- 5. Retrieve all customers whose last name is 'Jones'
SELECT * FROM customers WHERE last_name = 'Jones';

-- 6. Retrieve all customers whose first name is not 'Scott'
SELECT * FROM customers WHERE first_name != 'Scott';
