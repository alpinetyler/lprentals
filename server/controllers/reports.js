

module.exports = {
    totalPayments: (req, res) => {
        // console.log(11111, req)
        let db = req.app.get('db')
        db.totalPayments().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    }
}