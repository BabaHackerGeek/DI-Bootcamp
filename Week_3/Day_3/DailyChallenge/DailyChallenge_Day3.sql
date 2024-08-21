/* Part I: One-to-One Relationship */

/* 
Instruction: Create two tables: Customer and CustomerProfile. 
They have a one-to-one relationship, where a customer can have only one profile,
and a profile belongs to only one customer.
*/

/* Step 1: Create the Customer table */
-- The Customer table contains three columns: id (primary key), first_name (required), and last_name (required).
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,  -- id is auto-incremented and serves as the primary key.
    first_name VARCHAR(50) NOT NULL,  -- first_name is a required field.
    last_name VARCHAR(50) NOT NULL  -- last_name is a required field.
);

/* Step 2: Create the CustomerProfile table */
-- The CustomerProfile table contains three columns: id (primary key), isLoggedIn (boolean with default value false),
-- and customer_id, which is a foreign key referencing the Customer table. The customer_id must be unique to maintain
-- the one-to-one relationship.
CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,  -- id is auto-incremented and serves as the primary key.
    isLoggedIn BOOLEAN DEFAULT false,  -- isLoggedIn defaults to false if no value is provided.
    customer_id INTEGER REFERENCES Customer(id) UNIQUE  -- customer_id references id in Customer and must be unique.
);

/* Step 3: Insert customers into the Customer table */
-- Add three customers to the Customer table: John Doe, Jerome Lalu, and Lea Rive.
INSERT INTO Customer (first_name, last_name) 
VALUES 
('John', 'Doe'),  -- First customer
('Jerome', 'Lalu'),  -- Second customer
('Lea', 'Rive');  -- Third customer

/* Step 4: Insert customer profiles into the CustomerProfile table using subqueries */
-- John is logged in, Jerome is not logged in. Use subqueries to reference their customer_id values.
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES 
(true, (SELECT id FROM Customer WHERE first_name = 'John')),  -- John's profile with isLoggedIn = true
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));  -- Jerome's profile with isLoggedIn = false

/* Queries for Part I */

/* Step 5: Display the first_name of customers who are logged in */
-- Use an INNER JOIN to retrieve only customers with a profile and who are logged in.
SELECT c.first_name 
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

/* Step 6: Display all customers with their isLoggedIn status */
-- Use a LEFT JOIN to retrieve all customers, including those who don't have a profile. 
-- If they don't have a profile, set isLoggedIn to false using COALESCE.
SELECT c.first_name, COALESCE(cp.isLoggedIn, false) as isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

/* Step 7: Count the number of customers who are not logged in */
-- Use a LEFT JOIN and count the customers who are either not logged in or have no profile (considered as not logged in).
SELECT COUNT(*)
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;


/* Part II: Many-to-Many Relationship */

/* 
Instruction: Create three tables: Book, Student, and Library (junction table).
A book can be borrowed by multiple students, and a student can borrow multiple books.
*/

/* Step 1: Create the Book table */
-- The Book table has three columns: book_id (primary key), title (required), and author (required).
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,  -- book_id is auto-incremented and serves as the primary key.
    title VARCHAR(100) NOT NULL,  -- title is a required field.
    author VARCHAR(100) NOT NULL  -- author is a required field.
);

/* Step 2: Create the Student table */
-- The Student table has three columns: student_id (primary key), name (required, unique), and age (limited to <= 15).
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,  -- student_id is auto-incremented and serves as the primary key.
    name VARCHAR(50) NOT NULL UNIQUE,  -- name is a required field and must be unique.
    age INTEGER CHECK (age <= 15)  -- age cannot be greater than 15.
);

/* Step 3: Create the Library (junction) table */
-- The Library table contains two foreign keys: book_fk_id and student_fk_id. These form the primary key of the table.
-- The ON DELETE CASCADE and ON UPDATE CASCADE constraints ensure that deletions or updates in the Book or Student 
-- tables are reflected in the Library table.
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,  -- borrowed_date stores the date the book was borrowed.
    PRIMARY KEY (book_fk_id, student_fk_id)  -- The combination of book_fk_id and student_fk_id is unique.
);

/* Step 4: Insert records into the Library table using subqueries */
-- Add the borrowing records: John borrowed Alice In Wonderland, Bob borrowed To Kill a Mockingbird, etc.
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
 (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),  -- John borrowed Alice In Wonderland

((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), 
 (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),  -- Bob borrowed To Kill a Mockingbird

((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
 (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),  -- Lera borrowed Alice In Wonderland

((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
 (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');  -- Bob borrowed Harry Potter

/* Queries for Part II */

/* Step 5: Select all columns from the Library table */
-- Display the entire contents of the Library table.
SELECT * FROM Library;

/* Step 6: Select the name of the student and the title of the borrowed books */
-- Join the Library table with the Student and Book tables to retrieve the names of students and titles of the books they borrowed.
SELECT s.name, b.title 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

/* Step 7: Select the average age of the children who borrowed "Alice in Wonderland" */
-- Calculate the average age of students who borrowed the book "Alice In Wonderland".
SELECT AVG(s.age) as average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

/* Step 8: Delete a student and check the impact on the Library table */
-- Delete a student by name and observe the cascading delete effect on the Library table.
DELETE FROM Student WHERE name = 'John';

-- Check the Library table to see if the records related to John have been deleted.
SELECT * FROM Library;
