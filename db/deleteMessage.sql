DELETE FROM messages
WHERE id = $1;

SELECT * FROM messages
ORDER BY id asc;