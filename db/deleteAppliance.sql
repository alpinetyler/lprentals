DELETE FROM appliances
WHERE id = $1;

SELECT * FROM appliances
ORDER BY id asc;