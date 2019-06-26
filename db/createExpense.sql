INSERT INTO expenses(name, date, amount, category, rentalid)
VALUES(
${name},
${date},
${amount},
${category},
${rentalid}
);

SELECT * FROM expenses;