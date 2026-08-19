# SQL Lesson 17: Altering tables

Source: https://sqlbolt.com/lesson/altering_tables

As your data changes over time, SQL provides a way for you to update your corresponding tables and database schemas by using the `ALTER TABLE` statement to add, remove, or modify columns and table constraints.

## Adding columns

The syntax for adding a new column is similar to the syntax when creating new rows in the `CREATE TABLE` statement. You need to specify the data type of the column along with any potential table constraints and default values to be applied to both existing *and* new rows. In some databases like MySQL, you can even specify where to insert the new column using the `FIRST` or `AFTER` clauses, though this is not a standard feature.

### Altering table to add new column(s)

```sql
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint
    DEFAULT default_value;
```

## Removing columns

Dropping columns is as easy as specifying the column to drop, however, some databases (including SQLite) don't support this feature. Instead you may have to create a new table and migrate the data over.

### Altering table to remove column(s)

```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```

## Renaming the table

If you need to rename the table itself, you can also do that using the `RENAME TO` clause of the statement.

### Altering table name

```sql
ALTER TABLE mytable
RENAME TO new_table_name;
```

## Other changes

Each database implementation supports different methods of altering their tables, so it's always best to consult your database docs before proceeding: [MySQL](https://dev.mysql.com/doc/refman/5.6/en/alter-table.html), [Postgres](http://www.postgresql.org/docs/9.4/static/sql-altertable.html), [SQLite](https://www.sqlite.org/lang_altertable.html), [Microsoft SQL Server](https://msdn.microsoft.com/en-us/library/ms190273.aspx).

## Exercise

Our exercises use an implementation that only support adding new columns, so give that a try below.

**Table: Movies**

| Id  | Title               | Director       | Year | Length_minutes |
| --- | ------------------- | -------------- | ---- | -------------- |
| 1   | Toy Story           | John Lasseter  | 1995 | 81             |
| 2   | A Bug's Life        | John Lasseter  | 1998 | 95             |
| 3   | Toy Story 2         | John Lasseter  | 1999 | 93             |
| 4   | Monsters, Inc.      | Pete Docter    | 2001 | 92             |
| 5   | Finding Nemo        | Andrew Stanton | 2003 | 107            |
| 6   | The Incredibles     | Brad Bird      | 2004 | 116            |
| 7   | Cars                | John Lasseter  | 2006 | 117            |
| 8   | Ratatouille         | Brad Bird      | 2007 | 115            |
| 9   | WALL-E              | Andrew Stanton | 2008 | 104            |
| 10  | Up                  | Pete Docter    | 2009 | 101            |
| 11  | Toy Story 3         | Lee Unkrich    | 2010 | 103            |
| 12  | Cars 2              | John Lasseter  | 2011 | 120            |
| 13  | Brave               | Brenda Chapman | 2012 | 102            |
| 14  | Monsters University | Dan Scanlon    | 2013 | 110            |

### Tasks

1. Add a column named **Aspect_ratio** with a **FLOAT** data type to store the aspect-ratio each movie was released in.
2. Add another column named **Language** with a **TEXT** data type to store the language that the movie was released in. Ensure that the default for this language is **English**.
