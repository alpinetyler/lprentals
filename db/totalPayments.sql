SELECT r.address, SUM(p.amount)
FROM payments p
JOIN rentals r ON r.id=p.rentalid
GROUP BY r.address;
