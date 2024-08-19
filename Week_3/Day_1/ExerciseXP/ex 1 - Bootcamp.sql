/*
🌟 Exercise 1 : Bootcamp

Instructions:
For this exercise, you will have to find some requests on your own!

1. Create:
   - Create a database called bootcamp.
   - Create a table called students.
   - Add the following columns:
     - id
     - last_name
     - first_name
     - birth_date
   - The id must be auto_incremented.
   - Make sure to choose the correct data type for each column.
   - Here is the data to insert:

   | id | first_name | last_name | birth_date |
   |----|------------|-----------|------------|
   |  1 | Marc       | Benichou  | 02/11/1998 |
   |  2 | Yoan       | Cohen     | 03/12/2010 |
   |  3 | Lea        | Benichou  | 27/07/1987 |
   |  4 | Amelia     | Dux       | 07/04/1996 |
   |  5 | David      | Grez      | 14/06/2003 |
   |  6 | Omer       | Simpson   | 03/10/1980 |

2. Insert:
   - Insert the data seen above into the students table. Find the most efficient way to insert the data.
   - Insert your last_name, first_name, and birth_date into the students table (Take a look at the id given).

3. Select:
   - Fetch all of the data from the table.
   - Fetch all of the students' first_names and last_names.
   - For the following questions, only fetch the first_names and last_names of the students:
     - Fetch the student whose id is equal to 2.
     - Fetch the student whose last_name is Benichou AND first_name is Marc.
     - Fetch the students whose last_names are Benichou OR first_names are Marc.
     - Fetch the students whose first_names contain the letter 'a'.
     - Fetch the students whose first_names start with the letter 'a'.
     - Fetch the students whose first_names end with the letter 'a'.
     - Fetch the students whose second-to-last letter of their first_names is 'a' (Example: Leah).
     - Fetch the students whose id’s are equal to 1 AND 3.
     - Fetch the students whose birth_dates are equal to or come after 1/01/2000 (show all their info).
*/

-- Create the bootcamp database
CREATE DATABASE bootcamp;

-- Use the bootcamp database
\c bootcamp;

-- Create the students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- Insert data into the students table
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

-- Insert your own data
INSERT INTO students (first_name, last_name, birth_date) VALUES
('YourFirstName', 'YourLastName', 'YYYY-MM-DD');

-- Fetch all of the data from the table
SELECT * FROM students;

-- Fetch all of the students' first_names and last_names
SELECT first_name, last_name FROM students;

-- Fetch the student whose id is equal to 2
SELECT first_name, last_name FROM students WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- Fetch the students whose first_names start with the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- Fetch the students whose first_names end with the letter 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- Fetch the students whose second-to-last letter of their first_names is 'a'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3
SELECT first_name, last_name FROM students WHERE id IN (1, 3);

-- Fetch the students whose birth_dates are equal to or come after 1/01/2000
SELECT * FROM students WHERE birth_date >= '2000-01-01';
