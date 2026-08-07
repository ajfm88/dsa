--- SQL Lesson 6: Multi-table queries with JOINs
--- Exercise 6 — Tasks

--- 1. Find the domestic and international sales for each movie
SELECT id, title, domestic_sales, international_sales
FROM movies
INNER JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE domestic_sales > 0
ORDER BY domestic_sales DESC;

--- 2. Show the sales numbers for each movie that did better internationally rather than domestically
SELECT title, international_sales,  domestic_sales
FROM movies
INNER JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales
ORDER BY international_sales DESC;

--- 3. List all the movies by their ratings in descending order
SELECT title, rating
FROM movies
INNER JOIN boxoffice
    ON movies.id = boxoffice.movie_id
ORDER BY rating DESC;
