let id = 1;

let rentals = [
    {
        id: id++,
        price: 950,
        bd: 3,
        bth: 2,
        sqfeet: 1200,
        address: '58 E Center St',
        zip: '84004',
        imageUrl: "http://clipart-library.com/images/pi78gEyyT.png"
     },
    {
        id: id++,
        price: 1000,
        bd: 4,
        bth: 3,
        sqfeet: 1800,
        address: '86 E Center St',
        zip: '84004',
        imageUrl: "http://clipart-library.com/images/pi78gEyyT.png"
    },
    
    {
        id: id++,
        price: 1100,
        bd: 5,
        bth: 3,
        sqfeet: 2000,
        address: '65 E 100 S',
        zip: '84004',
        imageUrl: "http://clipart-library.com/images/pi78gEyyT.png"
    },

    {
        id: id++,
        price: 1400,
        bd: 4,
        bth: 2,
        sqfeet: 1800,
        address: '65 E 100 S',
        zip: '84004',
        imageUrl: "http://clipart-library.com/images/pi78gEyyT.png"
    },
    

]

module.exports = {
    read: (req,res) => res.send(rentals),
    create: (req, res) => {
        let newRental = req.body
        newRental.id = id++
        rentals.push(newRental)

        res.send(rentals)
    }

}