const express = require('express')
require('dotenv/config')
const massive = require('massive')
const session = require('express-session')


const RentalCtrl = require('./controllers/rentals')
const AuthCtrl = require('./controllers/auth')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('the db is definitely connected')
})

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.listen(SERVER_PORT, () => {
    console.log('we be listening on port', SERVER_PORT)
})

//Full CRUD for managing rentals
app.post('/api/rentals', RentalCtrl.create)//create property
app.get('/api/rentals', RentalCtrl.read)//read properties
app.put('/api/rentals/:id', RentalCtrl.update)//update property
app.delete('/api/rentals/:id', RentalCtrl.delete)//delete property--CRUD!

//Register and login endpoints
app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.currentUser)
