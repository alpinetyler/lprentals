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
        imageUrl: "https://previews.123rf.com/images/welcomia/welcomia1403/welcomia140300112/26623239-small-house-isolated-on-white-background-single-family-home-3d-illustration-.jpg"
     },
    {
        id: id++,
        price: 1000,
        bd: 4,
        bth: 3,
        sqfeet: 1800,
        address: '86 E Center St',
        zip: '84003',
        imageUrl: "https://previews.123rf.com/images/maxxyustas/maxxyustas1409/maxxyustas140900024/31615660-house-on-white-background-three-dimensional-image-3d.jpg"
    },
    
    {
        id: id++,
        price: 1100,
        bd: 5,
        bth: 3,
        sqfeet: 2000,
        address: '465 N Main',
        zip: '84004',
        imageUrl: "https://previews.123rf.com/images/mrgao/mrgao1506/mrgao150600014/41917681-white-3d-house-with-red-roof-on-white-background-illustration.jpg"
    },

    {
        id: id++,
        price: 1400,
        bd: 4,
        bth: 2,
        sqfeet: 1800,
        address: '65 E 100 S',
        zip: '90210',
        imageUrl: "https://previews.123rf.com/images/cherezoff/cherezoff1102/cherezoff110200022/8785486-a-small-house-with-red-roof-on-a-white-background.jpg"
    },
    

]

module.exports = {
    read: (req,res) => res.send(rentals),
    create: (req, res) => {
        let newRental = req.body
        newRental.id = id++
        rentals.push(newRental)

        res.send(rentals)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedRental = req.body
        updatedRental.id = id

        let index = rentals.findIndex(rental => +rental.id === +id)

        rentals.splice(index, 1, updatedRental)
        res.send(rentals)
    }

}

