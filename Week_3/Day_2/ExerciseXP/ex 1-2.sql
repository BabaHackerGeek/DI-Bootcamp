/*
🌟 Exercise 1 : Items and Customers

Instructions:
We will work on the public database that we created yesterday.

Use SQL to get the following from the database:

1. All items, ordered by price (lowest to highest).
2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
4. All last names (no other columns!), in reverse alphabetical order (Z-A).
*/

-- 1. Fetch all items, ordered by price (lowest to highest)
SELECT * FROM items ORDER BY price ASC;

-- 2. Fetch items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

-- 3. Fetch the first 3 customers in alphabetical order of the first name (A-Z), excluding the primary key column
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

-- 4. Fetch all last names, in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC;
