SELECT * FROM payments
WHERE rentalid = $1
order by date
