# MySQL Exercises

Below are a series of MySQL queries from a practice exercise.

## Queries

### 1. Display first name, last name, and patronus for all characters where the patronus is known.
```sql
SELECT fname, lname, patronus
FROM characters
WHERE patronus <> 'Unknown' AND patronus IS NOT NULL;
```

### 2. Display last names of characters whose last name ends with 'e'.
```sql
SELECT DISTINCT lname
FROM characters
WHERE lname LIKE '%e';
```

### 3. Calculate the total age of all characters.
```sql
SELECT SUM(age) AS total_age
FROM characters
WHERE age IS NOT NULL;
```

### 4. Display first name, last name, and age of characters in descending order of age.
```sql
SELECT fname, lname, age
FROM characters
ORDER BY age DESC;
```

### 5. Display first name and age for characters aged between 50 and 100 years.
```sql
SELECT fname, age
FROM characters
WHERE age BETWEEN 50 AND 100;
```

### 6. Display distinct ages of characters in ascending order.
```sql
SELECT DISTINCT age
FROM characters
WHERE age IS NOT NULL
ORDER BY age;
```

### 7. Display all details for characters in Gryffindor faculty who are older than 30.
```sql
SELECT *
FROM characters
WHERE faculty = 'Gryffindor' AND age > 30;
```

### 8. Display the first three distinct faculty names.
```sql
SELECT DISTINCT faculty
FROM characters
LIMIT 3;
```

### 9. Display names of characters whose name starts with 'N' and has 5 letters, or whose name starts with 'L'.
```sql
SELECT fname
FROM characters
WHERE (fname LIKE 'N____') OR (fname LIKE 'L%');
```

### 10. Calculate the average age of all characters.
```sql
SELECT AVG(age) AS average_age
FROM characters
WHERE age IS NOT NULL;
```

### 11. Delete the character with ID = 11.
```sql
DELETE FROM characters
WHERE char_id = 11;
```

### 12. Display last names containing the letter 'a'.
```sql
SELECT DISTINCT lname
FROM characters
WHERE lname LIKE '%a%';
```

### 13. Use alias to rename `fname` column to "Half-Blood Prince".
```sql
SELECT fname AS `Half-Blood Prince`
FROM characters;
```

### 14. Display id and patronus for all known patronuses in alphabetical order.
```sql
SELECT char_id, patronus
FROM characters
WHERE patronus IS NOT NULL
ORDER BY patronus;
```

### 15. Display first name and last name for characters whose last name is Crabbe, Granger, or Diggory.
```sql
SELECT fname, lname
FROM characters
WHERE lname IN ('Crabbe', 'Granger', 'Diggory');
```

### 16. Display the minimum age among all characters.
```sql
SELECT MIN(age) AS youngest_age
FROM characters
WHERE age IS NOT NULL;
```

### 17. Use UNION to display first names from `characters` and book names from `library`.
```sql
SELECT fname AS item
FROM characters
UNION
SELECT book_name
FROM library;
```

### 18. Use HAVING to count characters per faculty, showing only faculties with more than 1 character.
```sql
SELECT faculty, COUNT(*) AS cnt
FROM characters
GROUP BY faculty
HAVING COUNT(*) > 1;
```
