UPDATE expenses
SET name = ${name},
date = ${date},
amount = ${amount},
category = ${category},
rentalid = ${rentalid}
WHERE id = ${id};

SELECT * FROM expenses
ORDER BY date ASC;