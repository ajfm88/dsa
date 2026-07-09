-- CASE
---- General case
SELECT customer_id, 
	CASE 
		WHEN (customer_id <= 100) THEN 'Premium'
		WHEN (customer_id BETWEEN 100 and 200) THEN 'Plus'
		ELSE 'Normal'
	END AS customer_class
FROM customer;

---- Case expression
SELECT customer_id,
	-- Use to equality
	CASE customer_id
		WHEN 2 THEN 'Winner'
		WHEN 5 THEN 'Second Place'
		ELSE 'Normal'
	END AS raffle_results
FROM customer;

SELECT 
	SUM(CASE rental_rate
		WHEN 0.99 THEN 1
		ELSE 0
	END) AS bargains, 
	SUM(CASE rental_rate
		WHEN 2.99 THEN 1
		ELSE 0
	END) AS regular, 
	SUM(CASE rental_rate
		WHEN 4.99 THEN 1
		ELSE 0
	END) AS premium
FROM film;

SELECT DISTINCT rating FROM film;

SELECT 
	SUM(CASE rating
		WHEN 'R' THEN 1 ELSE 0
	END) AS r, 
	SUM(CASE rating
		WHEN 'PG-13' THEN 1 ELSE 0
	END) AS pg13, 
	SUM(CASE rating
		WHEN 'PG' THEN 1 ELSE 0
	END) AS pg
FROM film;

-- COALESCE: returns the first not null value
	-- Example
		-- SELECT 
		-- 	item, 
		-- 	(value - COALESCE(discount, 0))
		-- FROM items;
		
-- CAST
	-- SELECT CAST('5' AS INTEGER)
	-- SELECT '5'::INTEGER (Postgre cast operator)

SELECT CAST('5' AS INTEGER) AS new_int;
SELECT '5'::INTEGER

SELECT * FROM rental;

SELECT 
	CHAR_LENGTH(CAST(inventory_id AS VARCHAR))
FROM rental;

-- NULLIF(arg1, arg2): return NULL if arg1 = arg2
CREATE TABLE dpts(
	first_name VARCHAR(50), 
	department VARCHAR(50)
);

INSERT INTO dpts(
	first_name, 
	department
)
VALUES
	('Vinton', 'A'), 
	('Lauren', 'A'), 
	('Claire' 'B');
	
SELECT (
	SUM(CASE WHEN department = 'A' THEN 1 ELSE 0 END) /
	SUM(CASE WHEN department = 'B' THEN 1 ELSE 0 END)
) AS dpts_ratio
FROM dpts;

DELETE FROM dpts 
WHERE department = 'B';

SELECT (
	SUM(CASE WHEN department = 'A' THEN 1 ELSE 0 END) /
	NULLIF(
		SUM(CASE WHEN department = 'B' THEN 1 ELSE 0 END), 0)
) AS dpts_ratio
FROM dpts;

-- VIEWS: db object that is of a stored query
CREATE VIEW customer_info AS 
SELECT first_name, last_name, address FROM customer
INNER JOIN address
ON customer.address_id = address.address_id;

SELECT * FROM customer_info;

CREATE OR REPLACE VIEW customer_info AS
SELECT first_name, last_name, address, district FROM customer
INNER JOIN address
ON customer.address_id = address.address_id;

DROP VIEW IF EXISTS customer_info;

ALTER VIEW customer_info RENAME to c_info;


-- https://stackoverflow.com/questions/21018256/can-i-automatically-create-a-table-in-postgresql-from-a-csv-file-with-headers
-- https://www.enterprisedb.com/postgres-tutorials/how-import-and-export-data-using-csv-files-postgresql
-- https://stackoverflow.com/questions/2987433/how-to-import-csv-file-data-into-a-postgresql-table