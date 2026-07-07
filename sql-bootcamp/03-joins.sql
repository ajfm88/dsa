-- AS (Alias)
-- SELECT columns AS new_name FROM table

SELECT COUNT(amount) AS num_transactions FROM payment;

SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id;

/*
    error: do not do this
*/
SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id
HAVING total_spent > 100;
/*
    instead, do this:
*/
SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100;


-- JOINS

-- INNER JOIN
-- SELECT * FROM TableA
-- INNER JOIN TableB
-- ON TableA.col_match = TableB.col_match;

SELECT * FROM registrations
INNER JOIN logins
ON registrations.name = logins.name;

--- when both tables have the same column, we do table.columnName
SELECT reg_id, logins.name, log_id
FROM registrations
INNER JOIN logins
ON registrations.name = logins.name;

--- Practice with pgAdmin
SELECT payment_id, payment.customer_id, first_name, last_name
FROM payment
INNER JOIN customer
ON payment.customer_id = customer.customer_id;


-- FULL OUTER JOIN
-- SELECT * FROM TableA
-- FULL OUTER JOIN TableB
-- ON TableA.col_match = TableB.col_match;

-- FULL OUTER JOIN with WHERE
-- SELECT * FROM TableA
-- FULL OUTER JOIN TableB
-- ON TableA.col_match = TableB.col_match
-- WHERE TableA.id IS null OR TableB.id IS null;

SELECT * FROM customer
FULL OUTER JOIN payment
ON customer.customer_id = payment.customer_id
WHERE customer.customer_id IS null
OR payment.payment_id IS null;

SELECT COUNT(DISTINCT customer_id) FROM payment;
SELECT COUNT(DISTINCT customer_id) FROM customer;


/*
A LEFT OUTER JOIN results in the set of records that are in the left table, 
if there is no match with the right table, the results are null.

-- SELECT * FROM TableA
-- LEFT OUTER JOIN TableB
-- ON TableA.col_match = TableB.col_match
-- WHERE TableB.id IS null;

 All from table A NONE from table B
SELECT * FROM TableA
LEFT OUTER JOIN Logins
ON Registrations.name = Logins.name;
*/

SELECT * FROM registrations
LEFT OUTER JOIN logins
ON Registrations.name = Logins.name;


SELECT film.film_id, title, inventory_id, store_id
FROM film
LEFT OUTER JOIN inventory
ON inventory.film_id = film.film_id;

SELECT film.film_id, title, inventory_id, store_id
FROM film
LEFT OUTER JOIN inventory
ON inventory.film_id = film.film_id
WHERE inventory.film_id IS null;

/*
-- RIGHT OUTER JOIN
-- SELECT * FROM tableA
-- RIGHT OUTER JOIN tableB
-- ON tableA.col_match = tableB.col_match
-- WHERE tableB.id IS null;
*/


/*
UNION EXAMPLE:
-- SELECT column_name FROM table1
-- UNION 
-- SELECT column_name FROM table2;
*/
SELECT * FROM sales2021_q1
UNION
SELECT * FROM sales2021_q2;


/*
JOIN Challenge Tasks
California sales tax laws have changed and we need to alert our customers to this through email.
What are the emails of the customers who live in California?
*/
-- My Attempt
SELECT email, district FROM customer
LEFT OUTER JOIN address
ON customer.address_id = address.address_id
WHERE address.district = 'California';

-- Solution from Course
SELECT district, email FROM address
INNER JOIN customer
ON address.address_id = customer.address_id
WHERE district = 'California';

/*
Lesson:
Use INNER JOIN when you want matching rows from both tables, and LEFT/RIGHT/FULL OUTER JOIN 
when you want to preserve unmatched rows from one side.
*/



/*
Challenge 2
A customer walks in and is a huge fan of the actor "Nick Wahlberg" and wants to know which movies he is in.
Get a list of all the movies "Nick Wahlberg" has been in.
*/
--- My Attempt
-- I start from the actor table
SELECT title, first_name, last_name FROM actor
-- the film_actor table has actor_id, so I link it to the actor table
INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id
-- both the film and the film_actor table have film_id, so I link them via that field
INNER JOIN film ON film_actor.film_id = film.film_id
-- filter by specific actor, then add the specific fields up top
WHERE first_name = 'Nick' AND last_name = 'Wahlberg';

-- Solution from Course
SELECT title,first_name,last_name FROM film_actor 
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
INNER JOIN film ON film_actor.film_id = film.film_id
WHERE first_name = 'Nick' AND last_name = 'Wahlberg';