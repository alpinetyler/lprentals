UPDATE appliances
SET name = ${name},
brand = ${brand},
datepurchased = ${datepurchased},
serialnumber = ${serialnumber},
rentalid = ${rentalid}
WHERE id = ${id};

SELECT * FROM appliances
ORDER BY id;