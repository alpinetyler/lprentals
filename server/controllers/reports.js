

module.exports = {
    getPayments: (req, res) => {
        // console.log(11111, req)
        let { id } = req.params
        let db = req.app.get('db')
        let payments = req.body
        payments.id = id
        // console.log(22222, payments.id)

        db.totalPayments(payments.id).then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    },
    getExpenses: (req, res) => {
        // console.log(11111, req)
        let { id } = req.params
        let db = req.app.get('db')
        let expenses = req.body
        expenses.id = id
        // console.log(666, expenses.id)
        db.totalExpenses(expenses.id).then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    }

}