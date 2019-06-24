INSERT INTO renters (name, email, password, isadmin, rentalid)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;