# SQL Topic: Unions, Intersections & Exceptions

Source: https://sqlbolt.com/topic/set_operations

When working with multiple tables, the `UNION` and `UNION ALL` operator allows you to append the results of one query to another assuming that they have the same column count, order and data type. If you use the `UNION` without the `ALL`, duplicate rows between the tables will be removed from the result.

## Select query with set operators

```sql
SELECT column, another_column
   FROM mytable
UNION / UNION ALL / INTERSECT / EXCEPT
SELECT other_column, yet_another_column
   FROM another_table
ORDER BY column DESC
LIMIT n;
```

In the order of operations as defined in [Lesson 12: Order of execution](https://sqlbolt.com/lesson/select_queries_order_of_execution), the `UNION` happens before the `ORDER BY` and `LIMIT`. It's not common to use `UNION`s, but if you have data in different tables that can't be joined and processed, it can be an alternative to making multiple queries on the database.

Similar to the `UNION`, the `INTERSECT` operator will ensure that only rows that are identical in both result sets are returned, and the `EXCEPT` operator will ensure that only rows in the first result set that aren't in the second are returned. This means that the `EXCEPT` operator is query order-sensitive, like the `LEFT JOIN` and `RIGHT JOIN`.

Both `INTERSECT` and `EXCEPT` also discard duplicate rows after their respective operations, though some databases also support `INTERSECT ALL` and `EXCEPT ALL` to allow duplicates to be retained and returned.
