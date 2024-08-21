/*
🌟 Exercise 1: DVD Rental

Instructions:
1. Get a list of all the languages from the language table.
2. Get a list of all films joined with their languages – select the following details: film title, description, and language name.
3. Get all languages, even if there are no films in those languages – select the following details: film title, description, and language name.
4. Create a new table called new_film with the following columns: id, name. Add some new films to the table.
5. Create a new table called customer_review for film reviews, considering the DELETE constraint:
   - review_id: primary key, non-null, auto-increment.
   - film_id: references the new_film table.
   - language_id: references the language table.
   - title: title of the review.
   - score: rating (1-10).
   - review_text: the text of the review.
   - last_update: when the review was last updated.
6. Add 2 movie reviews, ensuring they link to valid objects in the other tables.
7. Delete a film with a review from the new_film table and observe what happens to the customer_review table.
*/

-- 1. Get a list of all the languages from the language table
SELECT * FROM language;

-- 2. Get a list of all films joined with their languages
SELECT f.title AS film_title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films in those languages
SELECT f.title AS film_title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- 4. Create a new table called new_film with columns id and name
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Add some new films to the new_film table
INSERT INTO new_film (name) VALUES 
('The Matrix'),
('Inception'),
('Interstellar');

-- 5. Create a new table called customer_review for film reviews
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Add 2 movie reviews linked to valid objects in the other tables
INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
((SELECT id FROM new_film WHERE name = 'The Matrix'), 
(SELECT language_id FROM language WHERE name = 'English'), 
'Great Sci-Fi Movie', 9, 'A revolutionary film that redefined the sci-fi genre.'),

((SELECT id FROM new_film WHERE name = 'Inception'), 
(SELECT language_id FROM language WHERE name = 'English'), 
'Mind-Bending Experience', 10, 'A complex and thrilling narrative that keeps you on the edge of your seat.');

-- 7. Delete a film that has a review from the new_film table
DELETE FROM new_film WHERE name = 'The Matrix';

-- Check what happens to the customer_review table after deletion
SELECT * FROM customer_review;


/*
🌟 Exercise 2: DVD Rental

Instructions:
1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
3. Drop the customer_review table. Is this an easy step, or does it need extra checking?
4. Find out how many rentals are still outstanding (i.e., have not been returned to the store yet).
5. Find the 30 most expensive movies which are outstanding (i.e., have not been returned to the store yet).
6. Help your friend find the movies he wants to rent based on the following clues:
   - The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
   - The 2nd film: A short documentary (less than 1 hour long), rated “R”.
   - The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
   - The 4th film: A film that his friend Matthew Mahan watched, had the word “boat” in the title or description, and was an expensive DVD to replace.
*/

-- 1. Update the language of some films
UPDATE film 
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title IN ('The Matrix', 'Inception');

-- 2. Foreign keys in the customer table
/*
The customer table likely has foreign keys referencing:
- The store table (store_id).
- The address table (address_id).

These foreign keys ensure referential integrity, meaning that when inserting into the customer table, you must provide valid existing store_id and address_id values from the store and address tables respectively.
*/

-- 3. Drop the customer_review table
DROP TABLE customer_review;

-- Dropping a table is a straightforward process, but you need to ensure that the table is not being referenced by other tables (no foreign key dependencies) or it might lead to errors or data integrity issues.

-- 4. Find out how many rentals are still outstanding (not returned)
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. Find the 30 most expensive movies which are outstanding (not returned)
SELECT film.title, film.rental_rate, rental.rental_date
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- 6. Help your friend find the movies he wants to rent

-- 6.1 The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
AND f.description LIKE '%sumo%';

-- 6.2 The 2nd film: A short documentary (less than 1 hour long), rated “R”.
SELECT title, description
FROM film
WHERE length < 60 AND rating = 'R' AND description LIKE '%documentary%';

-- 6.3 The 3rd film: A film that his friend Matthew Mahan rented, paid over $4.00, and returned between 28th July and 1st August, 2005.
SELECT f.title, r.rental_date, r.return_date, p.amount
FROM rental r
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 6.4 The 4th film: A film that Matthew Mahan watched, had the word “boat” in the title or description, and was an expensive DVD to replace.
SELECT f.title, f.description, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
