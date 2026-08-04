# SQL Lesson 4: Filtering and sorting Query results

Source: https://sqlbolt.com/lesson/filtering_sorting_query_results

Even though the data in a database may be unique, the results of any particular query may not be – take our Movies table for example, many different movies can be released the same year. In such cases, SQL provides a convenient way to discard rows that have a duplicate column value by using the `DISTINCT` keyword.

## Select query with unique results

```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```

Since the `DISTINCT` keyword will blindly remove duplicate rows, we will learn in a future lesson how to discard duplicates based on specific columns using grouping and the `GROUP BY` clause.

## Ordering results

Unlike our neatly ordered table in the last few lessons, most data in real databases are added in no particular column order. As a result, it can be difficult to read through and understand the results of a query as the size of a table increases to thousands or even millions rows.

To help with this, SQL provides a way to sort your results by a given column in ascending or descending order using the `ORDER BY` clause.

## Select query with ordered results

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
```

When an `ORDER BY` clause is specified, each row is sorted alpha-numerically based on the specified column's value. In some databases, you can also specify a collation to better sort data containing international text.

## Limiting results to a subset

Another clause which is commonly used with the `ORDER BY` clause are the `LIMIT` and `OFFSET` clauses, which are a useful optimization to indicate to the database the subset of the results you care about.

The `LIMIT` will reduce the number of rows to return, and the optional `OFFSET` will specify where to begin counting the number rows from.

## Select query with limited rows

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

If you think about websites like Reddit or Pinterest, the front page is a list of links sorted by popularity and time, and each subsequent page can be represented by sets of links at different offsets in the database. Using these clauses, the database can then execute queries faster and more efficiently by processing and returning only the requested content.

### Did you know?

If you are curious about when the `LIMIT` and `OFFSET` are applied relative to the other parts of a query, they are generally done last after the other clauses have been applied. We'll touch more on this in [Lesson 12: Order of execution](https://sqlbolt.com/lesson/select_queries_order_of_execution) after introducing a few more parts of the query.

## Exercise

There are a few concepts in this lesson, but all are pretty straight-forward to apply. To spice things up, we've gone and scrambled the **Movies** table for you in the exercise to better mimic what kind of data you might see in real life. Try and use the necessary keywords and clauses introduced above in your queries.

**Table: Movies**

| Id  | Title           | Director       | Year | Length_minutes |
| --- | --------------- | -------------- | ---- | -------------- |
| 1   | Toy Story       | John Lasseter  | 1995 | 81             |
| 2   | A Bug's Life    | John Lasseter  | 1998 | 95             |
| 3   | Toy Story 2     | John Lasseter  | 1999 | 93             |
| 4   | Monsters, Inc.  | Pete Docter    | 2001 | 92             |
| 5   | Finding Nemo    | Andrew Stanton | 2003 | 107            |
| 6   | The Incredibles | Brad Bird      | 2004 | 116            |
| 7   | Cars            | John Lasseter  | 2006 | 117            |
| 8   | Ratatouille     | Brad Bird      | 2007 | 115            |
| 9   | WALL-E          | Andrew Stanton | 2008 | 104            |
| 10  | Up              | Pete Docter    | 2009 | 101            |

### Tasks

1. List all directors of Pixar movies (alphabetically), without duplicates
2. List the last four Pixar movies released (ordered from most recent to least)
3. List the **first** five Pixar movies sorted alphabetically
4. List the **next** five Pixar movies sorted alphabetically
