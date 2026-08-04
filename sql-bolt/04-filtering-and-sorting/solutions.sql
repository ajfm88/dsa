--- SQL Lesson 4: Filtering and sorting Query results
--- Exercise 4 — Tasks

--- 1. List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT director
FROM movies
ORDER BY director ASC;

--- 2. List the last four Pixar movies released (ordered from most recent to least)
SELECT title
FROM movies
ORDER BY year DESC
LIMIT 4;

--- 3. List the first five Pixar movies sorted alphabetically
SELECT *
FROM movies
ORDER BY title ASC
LIMIT 5;

--- 4. List the next five Pixar movies sorted alphabetically
SELECT *
FROM movies
ORDER BY title ASC
LIMIT 5 OFFSET 5;