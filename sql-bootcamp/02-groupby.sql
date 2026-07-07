/*
--- Section 3: GROUP BY Statements

Most Common Aggregate Functions:
AVG() - returns average value
COUNT() - returns number of values
MAX() - returns maximum value
MIN() - returns minimum value
SUM() - returns the sum of all values

Special Notes:
AVG() returns a floating point value many decimal 
places (e.g. 2.342418...)
You can use ROUND() to specify precision after the decimal.
COUNT() simply returns the number of rows, which means by 
convention we just use COUNT(*)
*/
SELECT MIN(replacement_cost) FROM film; -- returns the minimum rep cost

SELECT MAX(replacement_cost) FROM film;

SELECT MIN(replacement_cost), MAX(replacement_cost) FROM film;

SELECT COUNT(*) FROM film;

--- ROUND (VALUE, 2) rounds value to 2 decimal places
SELECT ROUND(AVG(replacement_cost), 2) FROM film;

SELECT SUM(replacement_cost) FROM film;

/* GROUP BY: group by some categorical value
	-- SELECT category, AGG(data_col) 
	-- FROM table_
	-- WHERE category condition
	-- GROUP BY category
	-- ORDER BY AGG(data_col);

The order for the Big 6 is:
SELECT      |   Start
FROM        |   Fridays
WHERE       |   With
GROUP BY    |   Grandma's
HAVING      |   Homemade
ORDER BY    |   Oatmeal.
*/
SELECT company, division, SUM(sales)
FROM finance_table
WHERE division IN ('marketing', 'transport')
GROUP BY company, division

SELECT company, SUM(sales)
FROM finance_table
GROUP BY company
ORDER BY SUM(sales)
LIMIT 5

--- GROUP BY practice
SELECT customer_id, SUM(amount) FROM payment  --- total SUM amount
GROUP BY customer_id                          --- PER customer_id
ORDER BY SUM(amount);

-- Number of transactions per customer
SELECT customer_id, COUNT(amount) FROM payment
GROUP BY customer_id
ORDER BY COUNT(amount);

-- Amount of money that every customer spent with every staff
SELECT customer_id, staff_id, SUM(amount) FROM payment
GROUP BY staff_id, customer_id
ORDER BY customer_id;

-- Amount of money spent every day
SELECT DATE(payment_date), SUM(amount) FROM payment
GROUP BY DATE(payment_date)
ORDER BY SUM(amount);

/*
GROUP BY CHALLENGE

We have two staff members, with Staff IDs 1 and 2. We want to give a bonus 
to the staff member that handled the most payments. (Most in terms of number
of payments processed, not total dollar amount). How many payments did each 
staff member handle and who gets the bonus?
*/
SELECT staff_id, COUNT(payment_id)
FROM payment
GROUP BY staff_id
ORDER BY COUNT(payment_id);

/*
CHALLENGE 2

Corporate HQ is conducting a study on the relationship between replacement cost 
and a movie MPAA rating (e.g. G, PG, R, etc...). What is the average replacement 
cost per MPAA rating? Note: You may need to expand the AVG column to view correct 
results.
*/
SELECT ROUND(AVG(replacement_cost), 2), rating
FROM film
GROUP BY rating;

/*
CHALLENGE 3

We are running a promotion to reward our top 5 customers with coupons. What are 
the customer ids of the top 5 customers by total spend?
*/
SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC
LIMIT 5;

/*
-- HAVING (filter based on the AGG function)
	-- SELECT ... FROM ...
	-- WHERE ...
	-- GROUP BY ...
	-- HAVING AGG(...) condition;

The order for the Big 6 is:
SELECT      |   Start
FROM        |   Fridays
WHERE       |   With
GROUP BY    |   Grandma's
HAVING      |   Homemade
ORDER BY    |   Oatmeal.
*/
SELECT customer_id, SUM(amount) FROM payment
WHERE customer_id NOT IN (184, 87, 477)
GROUP BY customer_id;

SELECT customer_id, SUM(amount) FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100;

SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id
HAVING COUNT(*) > 300;

--- HAVING challenges
/*
Challenge: We are launching a platinum service for our most loyal customers. 
We will assign platinum status to customers that have had 40 or more transaction 
payments. What customer_ids are eligible for platinum status?
*/
SELECT customer_id, COUNT(payment_id) FROM payment
GROUP BY customer_id
HAVING COUNT(payment_id) >= 40;

/*
Challenge: What are the customer ids of customers who have spent more than 
$100 in payment transactions with our staff_id member 2?
*/
SELECT customer_id, SUM(amount)
FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) > 100;


/*
ASSESSMENT TEST 1
1. Return the customer IDs of customers who have spent at least $110 with the staff member who has an ID of 2.
*/
SELECT customer_id, SUM(amount)
FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) >= 110;

--- 2. How many films begin with the letter J?

SELECT COUNT(title) FROM film WHERE title LIKE 'J%';

/*
3. What customer has the highest customer ID number whose name starts with an 'E' 
and has an address ID lower than 500?
*/
SELECT customer_id, first_name, last_name, address_id 
FROM customer
WHERE address_id < 500 AND first_name LIKE 'E%'
ORDER BY customer_id DESC
LIMIT 1;