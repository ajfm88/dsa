--- Section 2: SQL Statement Fundamentals
--- SELECT column_name FROM table_name

SELECT c1, c3 FROM table_1

--- If you want all columns

SELECT * FROM table_1

--- Not good practice to use an asterisk

--- DVD Rental database practice

SELECT * FROM actor;

SELECT first_name FROM actor;

SELECT first_name, last_name FROM actor;

SELECT * FROM city;

/* Challenge: SELECT
Business Situation:
We want to send out a promotional email to our existing customers!

Challenge: Use a SELECT statement to grab the first, last name and email address.
*/
SELECT first_name, last_name, email FROM customer;

--- SELECT DISTINCT
--- Return only the distinct values in a column

SELECT DISTINCT column FROM table_1

SELECT DISTINCT (column) FROM table_1

SELECT DISTINCT release_year FROM film;

SELECT DISTINCT (rental_rate) FROM film;

/* Challenge: SELECT DISTINCT
Situation:
An Australian visitor isn't familiar with MPAA movie ratings (e.g. PG , PG-13, R, etc…)
We want to know the types of ratings we have in our database.
What ratings do we have available?
*/

SELECT DISTINCT (rating) FROM film;

--- The COUNT function returns the number of input rows that match a specific condition of a query.

SELECT COUNT (rating) FROM film; --- returns 1000

--- it is more useful when combined with other commands

SELECT COUNT (DISTINCT rating) FROM film; --- returns 5

SELECT COUNT (DISTINCT amount) FROM payment; --- returns 19

--- SELECT WHERE
-- SELECT column FROM table WHERE conditions;

SELECT * FROM customer WHERE first_name = 'Jared';

SELECT * FROM film WHERE rental_rate > 4;

SELECT * FROM film
WHERE rental_rate > 4 AND replacement_cost >= 19.99;

SELECT * FROM film
WHERE rental_rate > 4 AND replacement_cost >= 19.99
AND rating = 'R';

SELECT title FROM film
WHERE rental_rate > 4 AND replacement_cost >= 19.99
AND rating = 'R';

SELECT COUNT(title) FROM film
WHERE rental_rate > 4 AND replacement_cost >= 19.99
AND rating = 'R';

SELECT COUNT(*) FROM film
WHERE rating = 'R' OR rating = 'PG-13';

/* Challenge: SELECT WHERE
Challenge No. 1
A customer forgot their wallet at our store! We need to track down their email to inform them.
What is the email for the customer with the name Nancy Thomas?
*/

SELECT email FROM customer WHERE first_name = 'Nancy' AND last_name = 'Thomas';

/*
Challenge No. 2
A customer wants to know what the movie "Outlaw Hanky" is about.
Could you give them the description for the movie "Outlaw Hanky"?
*/

SELECT description FROM film WHERE title = 'Outlaw Hanky';

/*
Challenge No. 3
A customer is late on their movie return, and we've mailed them a letter to their address 
at '259 Ipoh Drive'. We should also call them on the phone to let them know.
Can you get the phone number for the customer who lives at '259 Ipoh Drive'?
*/

SELECT phone FROM address WHERE address = '259 Ipoh Drive';

--- ORDER BY

SELECT * FROM customer ORDER BY first_name DESC;

SELECT store_id, first_name, last_name FROM customer ORDER BY store_id, first_name;

SELECT store_id, first_name, last_name FROM customer ORDER BY store_id DESC, first_name ASC;

--- LIMIT

SELECT * FROM payment ORDER BY payment_date DESC LIMIT 5;
SELECT * FROM payment WHERE amount != 0.00 ORDER BY payment_date DESC LIMIT 5;
SELECT * FROM payment LIMIT 1;

/* Challenge: ORDER BY
Challenge Task No. 1
We want to reward our first 10 paying customers.
What are the customer ids of the first 10 customers who created a payment?
*/

SELECT customer_id FROM payment WHERE amount != 0.00 ORDER BY payment_date ASC LIMIT 10;

/*
Challenge Task No. 2
A customer wants to quickly rent a video to watch over their short lunch break.
What are the titles of the 5 shortest (in length of runtime) movies?
*/

SELECT title, length FROM film ORDER BY length ASC LIMIT 5;

/*
Quick Bonus Question

If the previous customer can watch any movie that is 50 minutes or less in run time, \
how many options does she have?
*/

SELECT COUNT (*) FROM film WHERE length <= 50;

--- BETWEEN
-- BETWEEN low_value AND high_value (inclusive)
-- NOT BETWEEN low_value AND high_value (exclusive)
-- Can be used with dates. ISO 8601: YYYY-MM-DD

SELECT COUNT(*) FROM payment WHERE amount BETWEEN 8 AND 9;

SELECT COUNT(*) FROM payment WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-15';

--- IN
-- value IN (option1, ..., optionN)
-- Like using AND but more efficient

SELECT * FROM payment WHERE amount IN (0.99, 1.98, 1.99);

SELECT color FROM table WHERE color IN ('red', 'blue');

SELECT color FROM table WHERE color NOT IN ('red', 'blue');

SELECT DISTINCT (amount) FROM payment ORDER BY amount;

SELECT * FROM payment WHERE amount IN (0.99,1.98,1.99);

SELECT * FROM payment WHERE amount NOT IN (0.99,1.98,1.99);

SELECT * FROM customer WHERE first_name IN ('John', 'Jake', 'Julie');

--- LIKE and ILIKE
-- Percent % matches any sequence of characters
-- Underscore _ matches any single character

SELECT * FROM customer WHERE first_name LIKE 'J%';

SELECT * FROM customer WHERE first_name LIKE 'J%' AND last_name LIKE 'S%'; -- case sensitive

SELECT * FROM customer WHERE first_name ILIKE 'j%' AND last_name ILIKE 's%'; -- case insensitive

SELECT * FROM customer WHERE first_name LIKE '%er%';

SELECT * FROM customer WHERE first_name LIKE 'A%' ORDER BY last_name;

SELECT * FROM customer WHERE first_name LIKE 'A%' AND last_name NOT LIKE 'B%' ORDER BY last_name;

/*
General Challenge 1
*/
--- 1. How many payment transactions were greater than $5.00?
SELECT COUNT (amount) FROM payment WHERE amount > 5.00;

--- 2. How many actors have a first name that starts with the letter P?
SELECT COUNT(*) FROM actor WHERE first_name LIKE 'P%';

--- 3. How many unique districts are our customers from?
SELECT COUNT (DISTINCT district) FROM address;

--- 4. Retrieve the list of names for those distinct districts from the previous question.
SELECT DISTINCT district FROM address;

--- 5. How many films have a rating of R and a replacement cost between $5 and $15?
SELECT COUNT (*) FROM film WHERE rating = 'R' AND replacement_cost BETWEEN 5 AND 15;

--- 6. How many films have the word Truman somewhere in the title?
SELECT COUNT (*) FROM film WHERE title ILIKE '%truman%';