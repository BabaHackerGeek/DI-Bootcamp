/*
Instructions:
In this puzzle, you have to go through all the SQL queries and provide us the output of the requests before executing them (i.e., make an assumption).
Then, execute them to make sure you were correct.

Queries:
1. Create a table called FirstTab and insert the specified data.

2. Create a table called SecondTab and insert the specified data.

3. Make assumptions about the output of the following queries before executing them:

   Q1. What will be the OUTPUT of the following statement?
   SELECT COUNT(*) 
   FROM FirstTab AS ft 
   WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

   Q2. What will be the OUTPUT of the following statement?
   SELECT COUNT(*) 
   FROM FirstTab AS ft 
   WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

   Q3. What will be the OUTPUT of the following statement?
   SELECT COUNT(*) 
   FROM FirstTab AS ft 
   WHERE ft.id NOT IN (SELECT id FROM SecondTab);

   Q4. What will be the OUTPUT of the following statement?
   SELECT COUNT(*) 
   FROM FirstTab AS ft 
   WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
*/

-- 1. Create the FirstTab table
CREATE TABLE FirstTab (
    id integer, 
    name VARCHAR(10)
);

-- Insert data into FirstTab
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

-- Display data from FirstTab
SELECT * FROM FirstTab;

-- 2. Create the SecondTab table
CREATE TABLE SecondTab (
    id integer 
);

-- Insert data into SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- Display data from SecondTab
SELECT * FROM SecondTab;

-- Q1: Count how many rows meet the condition (Expected output: 0)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

-- Q2: Count how many rows meet the condition (Expected output: 3)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

-- Q3: Count how many rows meet the condition (Expected output: 0)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab);

-- Q4: Count how many rows meet the condition (Expected output: 3)
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
