INSERT INTO rentals(
    imageurl, price, bd, bth, sqfeet, address, zip)
VALUES(${imageurl}, ${price}, ${bd}, ${bth}, ${sqfeet}, ${address},
         ${zip});


SELECT * FROM rentals
ORDER BY id ASC;