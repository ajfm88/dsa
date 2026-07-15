# DataLemur SQL Solutions

This folder contains SQL solutions to DataLemur problems.

## Folder Structure

```
data-lemur/
└── [problem-slug]/
    ├── [problem-slug].sql
    └── README.md
```

## Naming Conventions

- Use the **URL slug** from the DataLemur problem URL as both the folder name and the base filename
  - e.g., `https://datalemur.com/questions/matching-skills` → folder: `matching-skills/`, file: `matching-skills.sql`
- Folder name and filenames must match exactly

## README.md Structure

Each problem's `README.md` must follow this template:

```markdown
# [Problem Title](https://datalemur.com/questions/[slug])

**Difficulty:** Easy | Medium | Hard
**Company:** [Company Name]

## Problem

[Full problem description]

## Schema

**Table: `table_name`**
| Column | Type |
|--------|------|
| col1   | type |
| col2   | type |

## Example Input

**`table_name`**
| col1 | col2 |
|------|------|
| val1 | val2 |

## Expected Output

| col1 |
|------|
| val1 |

## Explanation

[Why the output is correct based on the example]

## Notes

- [Any constraints, edge cases, or guarantees about the data]
```

## .sql File Structure

Each `.sql` file must follow this template:

```sql
-- [Problem Title]
-- Difficulty: Easy | Medium | Hard
-- https://datalemur.com/questions/[slug]

[SQL solution here]
```

## Example

For the problem at `https://datalemur.com/questions/matching-skills`:

```
data-lemur/
└── matching-skills/
    ├── matching-skills.sql
    └── README.md
```
