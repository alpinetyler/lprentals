const express = require('express')
require('dotenv/config')
const massive = require('massive')
const session = require('express-session')
const twilio = require('twilio');


const RentalCtrl = require('./controllers/rentals')
const AuthCtrl = require('./controllers/auth')
const ApplianceCtrl = require('./controllers/appliances')
const ExpenseCtrl = require('./controllers/expenses')
const PayCtrl = require('./controllers/payments')
const MessageCtrl = require('./controllers/messages')

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

// Full CRUD for managing rentals
app.post('/api/rentals', RentalCtrl.create)//create property
app.get('/api/rentals', RentalCtrl.read)//read properties
app.put('/api/rentals/:id', RentalCtrl.update)//update property
app.delete('/api/rentals/:id', RentalCtrl.delete)//delete property--CRUD!

// Register and login endpoints
app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.currentUser)

// Full CRUD for managing appliances
app.post('/api/appliances', ApplianceCtrl.create)//create appliance
app.get('/api/appliances', ApplianceCtrl.read)//read appliances
app.put('/api/appliances/:id', ApplianceCtrl.update)//update appliance
app.delete('/api/appliances/:id', ApplianceCtrl.delete)//delete appliance

// Full CRUD for managing expenses
app.post('/api/expenses', ExpenseCtrl.create)//create appliance
app.get('/api/expenses', ExpenseCtrl.read)//read appliances
app.put('/api/expenses/:id', ExpenseCtrl.update)//update appliance
app.delete('/api/expenses/:id', ExpenseCtrl.delete)//delete appliance

//accept rental payments
app.post('/api/payment', PayCtrl.pay)
app.get('/api/payments', PayCtrl.read)

//accept messages to send out as texts or email?
app.get('/api/messages', MessageCtrl.read)//read messages
app.post('/api/messages', MessageCtrl.create)//create message
app.delete('./api/messages/:id', MessageCtrl.delete)//delete message




///////////////////////
//Twilio Test Code
//////////////////////

// var accountSid = 'ACf7457890df153a160a6cb3dbe60cc14a'; // Your Account SID from www.twilio.com/console
// var authToken = '60d98598f8d51b2585adce1b9840a7d5';   // Your Auth Token from www.twilio.com/console

// var client = new twilio(accountSid, authToken);

// client.messages.create({
//     body: 'Hello from Tyler in Node',
//     to: '+8017875574',  // Text this number
//     from: '+13852631663' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));
