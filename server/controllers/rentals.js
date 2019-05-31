let id = 1;


let rentals = [
    {
        id: id++,
        price: 5000,
        bd: 9,
        bth: 6,
        sqfeet: 12000,
        address: '58 E Center St',
        zip: '84611',
        imageUrl: "http://www.priceypads.com/wp-content/uploads/2015/11/I0F4781_2_3_4_5_6_7-Edit.jpg"
     },
    {
        id: id++,
        price: 1000,
        bd: 4,
        bth: 3,
        sqfeet: 1800,
        address: '86 E Center St',
        zip: '84003',
        imageUrl: "https://i.pinimg.com/originals/c7/6d/39/c76d393e93bdb8d5ec1c195814256530.jpg"
    },
    
    {
        id: id++,
        price: 1100,
        bd: 5,
        bth: 3,
        sqfeet: 2000,
        address: '465 N Main',
        zip: '84004',
        imageUrl: "https://i.pinimg.com/originals/55/35/67/553567671e07049c38991485779ef99d.jpg"
    },

    {
        id: id++,
        price: 1400,
        bd: 4,
        bth: 2,
        sqfeet: 1800,
        address: '65 E 100 S',
        zip: '84065',
        imageUrl: "https://www.provo-utah.us/uploads/7/8/6/6/7866822/dsc-0162_7_orig.jpg"
    },
    
    {
        id: id++,
        price: 1200,
        bd: 1,
        bth: 3,
        sqfeet: 1800,
        address: '65 E 100 S',
        zip: '84063',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCocTtFe7YVsmyIpfrReOuVK1wH6q2IK9KBsjR55liDpvQEsFB3g"
    },

    {
        id: id++,
        price: 1400,
        bd: 4,
        bth: 2,
        sqfeet: 1800,
        address: '65 E 100 S',
        zip: '84062',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQJRC9asrx7DW5pVlZTLGJRUUzoxO_rPrb_JhGozYRPj2xkm9"
    },

    {
        id: id++,
        price: 1800,
        bd: 5,
        bth: 2,
        sqfeet: 3500,
        address: '88 First Ave West',
        zip: '84061',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7IHmR9d-I40h9CjYxb1WcTZBXjy0qIrHJR4_EtoZuMC_t9GhPA"
    },

    {
        id: id++,
        price: 2100,
        bd: 6,
        bth: 5,
        sqfeet: 1800,
        address: '467 West Main',
        zip: '92245',
        imageUrl: "https://i2.wp.com/www.quackenbushrealtyinvestments.com/wp-content/uploads/2019/03/1-1.jpg?resize=500%2C300&ssl=1"
    },

    {
        id: id++,
        price: 1800,
        bd: 3,
        bth: 2,
        sqfeet: 2100,
        address: '55 Maple St',
        zip: '92256',
        imageUrl: "https://i1.wp.com/www.ourkerrazyadventure.com/wp-content/uploads/2015/09/Taylor-House-Provo-Utah-copy.jpg?ssl=1"
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
    },
    delete: (req, res) => {
        let {id} = req.params//get this from param on url
        let index = rentals.findIndex(rental => +rental.id === +id)
        rentals.splice(index, 1)
        res.send(rentals)
    },
    // search: (req, res) => {
    //     console.log(req.query)
    
    //     //{searchinput, searchType} = req.query

    //     //rentals.filter()
    // }

}

