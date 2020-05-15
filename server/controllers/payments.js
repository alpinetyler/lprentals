const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

module.exports = {
    pay:(req,res)=>{
        const db = req.app.get('db')
        const {token:{id},amount, rentalid} = req.body;
        // console.log(req.body)
        //get today's date
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        stripe.charges.create(
            {
                amount:amount,
                currency:'usd',
                source:id,
                description:'Test Charge'
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    // console.log('Successful payment',charge)
                    // let db = req.app.get('db')
                    db.createPayment({amount, date, rentalid}).then(response => {
                    res.send(response)
                    }).catch(err => console.log(err))
                    //return res.status(200).send(charge)
                }
            }
        )
    },

    read: (req, res) => {
        let db = req.app.get('db')
        db.getPayments().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    }
}