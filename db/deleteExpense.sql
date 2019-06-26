DELETE FROM expenses
WHERE id = $1;

SELECT * FROM expenses
ORDER BY id asc;