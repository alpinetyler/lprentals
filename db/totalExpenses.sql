SELECT r.address, e.category, SUM(e.amount) AS Expenses 
FROM rentals r
JOIN expenses e ON r.id = e.rentalid
WHERE r.id = $1
GROUP BY r.address, e.category
ORDER BY r.address