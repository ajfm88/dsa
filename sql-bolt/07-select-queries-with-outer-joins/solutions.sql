--- SQL Lesson 7: OUTER JOINs
--- Exercise 7 — Tasks

--- 1. Find the list of all buildings that have employees
SELECT DISTINCT building
FROM employees;

--- 2. Find the list of all buildings and their capacity
SELECT DISTINCT building_name, capacity
FROM buildings
LEFT JOIN employees
    ON buildings.building_name = employees.building;

--- 3. List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT DISTINCT building_name, role
FROM buildings
LEFT JOIN employees
    ON buildings.building_name = employees.building;