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


/*
🌟 Exercise 2: dvdrental Database

Instructions:

Setup:
1. Install the new sample database "dvdrental" on your PostgreSQL server.
2. Download the sample database file and extract it to your local directory.
3. In pgAdmin4:
   - Create a new database named dvdrental.
   - Right-click on the dvdrental database and select "Restore…".
   - For PC users, choose the format "Custom or tar". For Mac users, choose the format "Directory".
   - Locate the extracted dvdrental file or folder and restore it.

Troubleshooting:
- If you encounter a “Utility not found” error or binary path error, adjust the pgAdmin binary path in preferences.
- For any other errors, save them and seek assistance.

Task:
After setting up the dvdrental database, execute the following queries:

1. Write a query to select all the columns from the "customer" table.
2. Write a query to display the names (first_name, last_name) using an alias named “full_name”.
3. Write a query to select all the create_date from the “customer” table (no duplicates).
4. Write a query to get all the customer details from the customer table, in descending order by their first name.
5. Write a query to get the film ID, title, description, year of release, and rental rate in ascending order by their rental rate.
6. Write a query to get the address and phone number of all customers living in the Texas district (from the “address” table).
7. Write a query to retrieve all movie details where the movie id is either 15 or 150.
8. Write a query to check if your favorite movie exists in the database. Get the film ID, title, description, length, and rental rate (from the “film” table).
9. Write a query to get the film ID, title, description, length, and rental rate of all the movies starting with the first two letters of your favorite movie.
10. Write a query to find the 10 cheapest movies.
11. Write a query to find the next 10 cheapest movies (without using LIMIT).
12. Write a query that joins the customer and payment tables to get the first name, last name, amount, and date of every payment made, ordered by customer id.
13. Write a query to get all the movies which are not in inventory.
14. Write a query to find which city is in which country.
15. Bonus: Write a query to get the customer’s id, names (first and last), the amount, and the date of payment, ordered by the staff member who sold them the DVD.
*/

-- 1. Select all columns from the "customer" table
SELECT * FROM customer;

-- 2. Display names (first_name, last_name) using an alias "full_name"
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. Select all create_date from the “customer” table (no duplicates)
SELECT DISTINCT create_date FROM customer;

-- 4. Get all customer details from the customer table, in descending order by their first name
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Get the film ID, title, description, year of release, and rental rate in ascending order by rental rate
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

-- 6. Get the address and phone number of all customers living in the Texas district
SELECT address, phone 
FROM address 
WHERE district = 'Texas';

-- 7. Retrieve all movie details where the movie id is either 15 or 150
SELECT * FROM film WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists and get the film ID, title, description, length, and rental rate
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Your Favorite Movie Title';

-- 9. Get the film ID, title, description, length, and rental rate of all movies starting with the first two letters of your favorite movie
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'Yo%';

-- 10. Find the 10 cheapest movies
SELECT film_id, title, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;

-- 11. Find the next 10 cheapest movies (without using LIMIT)
SELECT film_id, title, rental_rate 
FROM (
    SELECT film_id, title, rental_rate, 
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num 
    FROM film
) AS ranked_movies 
WHERE row_num > 10 AND row_num <= 20;

-- 12. Join customer and payment tables to get first name, last name, amount, and date of every payment made, ordered by customer id
SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer c 
JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY c.customer_id;

-- 13. Get all movies which are not in inventory
SELECT film_id, title 
FROM film 
WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- 14. Find which city is in which country
SELECT city.city, country.country 
FROM city 
JOIN country ON city.country_id = country.country_id;

-- 15. Bonus: Get customer’s id, names (first and last), amount, and date of payment, ordered by staff member id
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id 
FROM customer c 
JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id;
