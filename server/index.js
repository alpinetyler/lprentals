const express = require('express')

const RentalCtrl = require('./controllers/rentals')

const app = express()
const port = 5005

app.use(express.json())

app.get('/api/rentals', RentalCtrl.read)
app.post('/api/rentals', RentalCtrl.create)
app.put('/api/rentals/:id', RentalCtrl.update)
// app.delete('/api/rentals/:id', AnimalCtrl.delete)

app.listen(port, () => {
    console.log('we are listening on port', port)
})