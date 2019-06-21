// let id = 1;


// let rentals = [
//     {
//         id: id++,
//         price: 5000,
//         bd: 9,
//         bth: 6,
//         sqfeet: 12000,
//         address: '58 E Center St',
//         zip: '84611',
//         imageUrl: "http://www.priceypads.com/wp-content/uploads/2015/11/I0F4781_2_3_4_5_6_7-Edit.jpg"
//     },
//     {
//         id: id++,
//         price: 1000,
//         bd: 4,
//         bth: 3,
//         sqfeet: 1800,
//         address: '86 E Center St',
//         zip: '84003',
//         imageUrl: "https://i.pinimg.com/originals/c7/6d/39/c76d393e93bdb8d5ec1c195814256530.jpg"
//     },

//     {
//         id: id++,
//         price: 2000,
//         bd: 8,
//         bth: 6,
//         sqfeet: 3500,
//         address: 'Neuschwansteinstrasse 20',
//         zip: '84004',
//         imageUrl: "https://i.pinimg.com/originals/55/35/67/553567671e07049c38991485779ef99d.jpg"
//     },

//     {
//         id: id++,
//         price: 1400,
//         bd: 4,
//         bth: 2,
//         sqfeet: 1800,
//         address: '65 E 100 S',
//         zip: '84065',
//         imageUrl: "https://www.provo-utah.us/uploads/7/8/6/6/7866822/dsc-0162_7_orig.jpg"
//     },

//     {
//         id: id++,
//         price: 1200,
//         bd: 1,
//         bth: 3,
//         sqfeet: 1800,
//         address: '65 E 100 S',
//         zip: '84063',
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCocTtFe7YVsmyIpfrReOuVK1wH6q2IK9KBsjR55liDpvQEsFB3g"
//     },

//     {
//         id: id++,
//         price: 1400,
//         bd: 4,
//         bth: 2,
//         sqfeet: 1800,
//         address: '65 E 100 S',
//         zip: '84062',
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQJRC9asrx7DW5pVlZTLGJRUUzoxO_rPrb_JhGozYRPj2xkm9"
//     },

//     {
//         id: id++,
//         price: 20000,
//         bd: 14,
//         bth: 14,
//         sqfeet: 65000,
//         address: 'Neuschwansteinstrasse 20',
//         zip: '84061',
//         imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1493157743%2F01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417.jpg%3Fitok%3DMtYBat6V&q=85"
//     },

//     {
//         id: id++,
//         price: 2100,
//         bd: 6,
//         bth: 5,
//         sqfeet: 1800,
//         address: '467 West Main',
//         zip: '92245',
//         imageUrl: "https://i2.wp.com/www.quackenbushrealtyinvestments.com/wp-content/uploads/2019/03/1-1.jpg?resize=500%2C300&ssl=1"
//     },

//     {
//         id: id++,
//         price: 1800,
//         bd: 4,
//         bth: 2,
//         sqfeet: 1899,
//         address: '55 Maple St',
//         zip: '92256',
//         imageUrl: "https://i1.wp.com/www.ourkerrazyadventure.com/wp-content/uploads/2015/09/Taylor-House-Provo-Utah-copy.jpg?ssl=1"
//     },

// ]

module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getRentals().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))

        // if (req.query.searchinput) {
        //     let searchResult = rentals.filter(rental => {
        //         return +rental.zip === +req.query.searchinput

        //     })
        //     // console.log(searchResult)
        //     return res.send(searchResult)
        // }
        // res.send(rentals)

    },
    create: (req, res) => {
        let newRental = req.body
        newRental.id = id++
        rentals.push(newRental)

        res.send(rentals)
    },
    update: (req, res) => {
        let { id } = req.params
        let updatedRental = req.body
        updatedRental.id = id

        let index = rentals.findIndex(rental => +rental.id === +id)

        rentals.splice(index, 1, updatedRental)
        res.send(rentals)
    },
    delete: (req, res) => {
        let { id } = req.params//get this from param on url
        let index = rentals.findIndex(rental => +rental.id === +id)
        rentals.splice(index, 1)
        res.send(rentals)
    }
}

