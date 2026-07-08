--- Timestamps and Extract
TIME  -- contains only time
DATE -- contains only date
TIMESTAMP -- contains date and time
TIMESTAMPTZ -- contains date, time and timezone

-- Displays all current run-time configuration parameters of the server
SHOW ALL;

-- Displays the current session's time zone setting
SHOW TIMEZONE;

-- Returns the current date and time (with time zone) at the start of the transaction
SELECT NOW();

-- Returns the current date and time as a formatted text string
SELECT TIMEOFDAY();
-- Returns the current time of day (with time zone)
SELECT CURRENT_TIME;
-- Returns the current date
SELECT CURRENT_DATE;


--- Extracting time and date information
-- EXTRACT() Allows you to extract or obtain a sub-component of a date value
SELECT EXTRACT(MONTH FROM payment_date) AS pay_month
FROM payment -- 2 (meaning Feb)

-- AGE() Calculates and returns the current age given a time stamp
SELECT AGE(payment_date)
FROM payment; -- 19 years 3 mons 27 days 07:39:39.003423

-- TO_CHAR() general function to onvert data types to text
-- useful for timestamp formatting
SELECT TO_CHAR(payment_date,'MONTH-YYYY')
FROM payment; -- FEBRUARY -2007

-- for more info: https://www.postgresql.org/docs/
-- for more info: https://www.postgresql.org/docs/12/functions-formatting.html


/* 
Challenge tasks
During which months did payments occur? 
Format your answer to return back the full month name.
*/
SELECT TO_CHAR(payment_date, 'Month') AS pay_month
FROM payment; -- February 

-- course solution
SELECT DISTINCT(TO_CHAR(payment_date,'Month')) FROM payment;

--- How many payments occured on a Monday?
-- PostgreSQL treats Sunday as 0, so Monday is 1.
SELECT COUNT(*) FROM payment
WHERE EXTRACT(dow FROM payment_date) = 1; -- 2948


--- Mathematical functions
-- https://www.postgresql.org/docs/9.5/functions-math.html
-- what percentage of the replacement cost is the rental rate?
SELECT ROUND(rental_rate/replacement_cost, 4) * 100 AS percent_cost
FROM film;


-- String Functions and Operators
SELECT first_name || ' ' || last_name AS full_name
FROM customer; -- Patricia Johnson

SELECT LEFT(first_name,1) || last_name || '@gmail.com'
AS custom_email
FROM customer; -- msmith@gmail.com


/*
SubQuery
A sub query allows you to construct complex queries, 
essentially performing a query on the results of another query.
A sub query allows you to construct complex queries, 
essentially performing a query on the results of another query. 
The syntax is straightforward and involves two SELECT statements.
-- 	SELECT columns_name FROM table_name
-- 	WHERE EXISTS
-- 	(SELECT columns_name FROM table_name WHERE condition);
*/
-- Standard query to return average grade
SELECT AVG(grade)
FROM test_scores;

-- How can we get a list of students who scored better than the average grade?
SELECT student, grade
FROM test_scores
WHERE grade > (SELECT AVG(grade)
FROM test_scores); -- this will run first, then...

SELECT student, grade
FROM test_scores
WHERE grade > (70); -- we end up with this query

-- films that have a rental rate higher than the average rental rate
SELECT title, rental_rate
FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film);

-- films that have been returned between May 29 and May 30
SELECT film_id, title FROM film
WHERE film_id IN 
	(SELECT inventory.film_id
	FROM rental
	INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
	WHERE return_date BETWEEN '2005-05-29' AND '2005-05-30')
ORDER BY film_id;

-- Find customer who have at least 1 payment of amount greater than 11
SELECT first_name, last_name 
FROM customer AS c
WHERE EXISTS
	(SELECT * FROM payment AS p
	WHERE p.customer_id = c.customer_id
	AND amount > 11);

-- To get customers who have NOT made a payment over 11 dollars, we just
SELECT first_name, last_name 
FROM customer AS c
WHERE NOT EXISTS
	(SELECT * FROM payment AS p
	WHERE p.customer_id = c.customer_id
	AND amount > 11);


/*
Self-Join

A self-join is a query in which a table is joined to itself.

Self-joins are useful for comparing values in a column of rows within the same table.

The self join can be viewed as a join of two copies of the same table.

The table is not actually copied, but SQL performs the command as though it were.

There is no special keyword for a self join, its simply standard JOIN syntax with 
the same table in both parts.

However, when using a self join it is necessary to use an alias for the table, 
otherwise the table names would be ambiguous.

Syntax:
SELECT tableA.col, tableB.col
FROM table AS tableA
JOIN table AS tableB ON
tableA.some_col = tableB.other_col
*/
SELECT emp.name, report.name AS rep
FROM employees AS emp
JOIN employees AS report ON
emp.emp_id = report.report_id

-- Find all the pairs of films that have the same length
SELECT f1.title, f2.title, f1.length
FROM film AS f1
INNER JOIN film AS f2 ON
-- different movies
f1.film_id != f2.film_id
-- same length
AND f1.length = f2.length;




/*
SQL Assessment Test 2
*/

-- 1. How can you retrieve all the information from the cd.facilities table?

SELECT * FROM cd.facilities;

-- 2. You want to print out a list of all of the facilities and their cost to members. 
-- How would you retrieve a list of only facility names and costs?

SELECT name, membercost FROM cd.facilities;

-- 3. How can you produce a list of facilities that charge a fee to members?

SELECT * FROM cd.facilities
WHERE membercost > 0;

-- 4. How can you produce a list of facilities that charge a fee to members, 
-- and that fee is less than 1/50th of the monthly maintenance cost? 
-- Return the facid, facility name, member cost, and monthly maintenance of 
-- the facilities in question.

SELECT facid, name, membercost, monthlymaintenance
FROM cd.facilities
WHERE membercost > 0
AND (membercost < monthlymaintenance/50.0);

-- 5. How can you produce a list of all facilities with the word 'Tennis' in their name?

SELECT * FROM cd.facilities WHERE name LIKE '%Tennis%';

-- 6. How can you retrieve the details of facilities with ID 1 and 5? 
-- Try to do it without using the OR operator.

SELECT * FROM cd.facilities
WHERE facid IN (1,5)

-- 7. How can you produce a list of members who joined after the start of September 2012? 
-- Return the memid, surname, firstname, and joindate of the members in question.

SELECT memid, surname, firstname, joindate FROM cd.members
WHERE joindate >= '2012-09-01';

-- 8. How can you produce an ordered list of the first 10 surnames in the members table?
-- The list must not contain duplicates.

SELECT DISTINCT surname FROM cd.members
ORDER BY surname LIMIT 10;

-- 9. You'd like to get the signup date of your last member. 
-- How can you retrieve this information?

SELECT MAX(joindate) AS latest_signup FROM cd.members;

-- 10. Produce a count of the number of facilities that have a cost to guests of 10 or more.

SELECT COUNT(*) FROM cd.facilities WHERE guestcost >= 10;

-- 11. Produce a list of the total number of slots booked per facility in the month of 
-- September 2012. Produce an output table consisting of facility id and slots, 
-- sorted by the number of slots.

SELECT facid, sum(slots) AS "Total Slots" FROM cd.bookings 
WHERE starttime >= '2012-09-01' AND starttime < '2012-10-01' 
GROUP BY facid ORDER BY SUM(slots);

-- 12. Produce a list of facilities with more than 1000 slots booked. 
-- Produce an output table consisting of facility id and total slots, sorted by facility id.

SELECT facid, sum(slots) AS total_slots FROM cd.bookings 
GROUP BY facid HAVING SUM(slots) > 1000 ORDER BY facid;

-- 13. How can you produce a list of the start times for bookings for tennis courts, 
-- for the date '2012-09-21'? 
-- Return a list of start time and facility name pairings, ordered by the time.

SELECT cd.bookings.starttime AS start, cd.facilities.name 
AS name 
FROM cd.facilities 
INNER JOIN cd.bookings
ON cd.facilities.facid = cd.bookings.facid 
WHERE cd.facilities.facid IN (0,1) 
AND cd.bookings.starttime >= '2012-09-21' 
AND cd.bookings.starttime < '2012-09-22' 
ORDER BY cd.bookings.starttime;

-- 14. How can you produce a list of the start times for bookings by 
-- members named 'David Farrell'?

SELECT cd.bookings.starttime 
FROM cd.bookings 
INNER JOIN cd.members ON 
cd.members.memid = cd.bookings.memid 
WHERE cd.members.firstname='David' 
AND cd.members.surname='Farrell';
