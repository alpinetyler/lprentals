DELETE FROM rentals
WHERE id = $1;

SELECT * FROM rentals
ORDER BY id asc;