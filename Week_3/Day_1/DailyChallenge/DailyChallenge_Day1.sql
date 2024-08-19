/*
Instructions
In this exercise, we will be using the actors table from today's lesson.

1. Count how many actors are in the table.
2. Try to add a new actor with some blank fields. What do you think the outcome will be?
*/

-- Create the actors table
CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

-- Count how many actors are in the table
SELECT COUNT(*) FROM actors;

-- Attempt to add a new actor with blank fields (This will result in an error)
INSERT INTO actors (first_name, last_name, age, number_oscars) VALUES ('John', '', '1980-05-15', NULL);

-- Expected outcome:
-- The INSERT statement will fail due to the NOT NULL constraints on the last_name and number_oscars fields.
