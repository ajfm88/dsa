# [Data Science Skills](https://datalemur.com/questions/matching-skills)

**Difficulty:** Easy
**Company:** LinkedIn

## Problem

Find the candidates who possess all of the following skills: Python, Tableau, and PostgreSQL.

Output the `candidate_id` of these candidates, sorted in ascending order.

## Schema

**Table: `candidates`**
| Column       | Type    |
|--------------|---------|
| candidate_id | integer |
| skill        | varchar |

## Example Input

**`candidates`**
| candidate_id | skill      |
|--------------|------------|
| 123          | Python     |
| 123          | Tableau    |
| 123          | PostgreSQL |
| 234          | R          |
| 234          | PowerBI    |
| 234          | SQL Server |
| 345          | Python     |
| 345          | Tableau    |

## Expected Output

| candidate_id |
|--------------|
| 123          |

## Explanation

- Candidate 123 has all three required skills (Python, Tableau, PostgreSQL) → included
- Candidate 234 has none of the required skills → excluded
- Candidate 345 has Python and Tableau but is missing PostgreSQL → excluded

## Notes

- No duplicate rows exist in the dataset
- Results must be sorted by `candidate_id` in ascending order
