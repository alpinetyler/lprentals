const express = require('express')

const RentalCtrl = require('./controllers/rentals')

const app = express()
const port = 5005

app.use(express.json())

app.post('/api/rentals', RentalCtrl.create)//create property
app.get('/api/rentals', RentalCtrl.read)//read properties
// app.get('/api/searchrentals', RentalCtrl.search)
app.put('/api/rentals/:id', RentalCtrl.update)//update property
app.delete('/api/rentals/:id', RentalCtrl.delete)//delete property--CRUD!

app.listen(port, () => {
    console.log('we be listening on port', port)
})

