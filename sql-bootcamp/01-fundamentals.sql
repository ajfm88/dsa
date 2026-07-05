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