UPDATE rentals
SET imageurl = ${imageurl},
price = ${price},
bd = ${bd},
bth = ${bth},
address = ${address},
sqfeet = ${sqfeet},
zip = ${zip}
WHERE id = ${id};

SELECT * FROM rentals
ORDER BY id;