const twilio = require('twilio');


module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.getMessages().then((response) => {
            res.send(response)
        }).catch(err => console.log(err))
    },

    create: (req, res) => {
        const {title, text, address} = req.body

        // console.log(2222,  title, text, 'Address: ', address )

        let db = req.app.get('db')
        db.createMessage(req.body).then(response => {

            const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER, TWILIO_TO_NUMBER } = process.env

            var accountSid = TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
            var authToken = TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

            var client = new twilio(accountSid, authToken);

            client.messages.create({
                //get message from front end and send it in a text to the rental property manager
                body: `Message from ${address} Title: ${title}, Text: ${text}`, 
                to: TWILIO_TO_NUMBER,  // Text this number
                from: TWILIO_NUMBER // From a valid Twilio number
            })
                .then((message) => console.log(message.sid));
            res.send(response)
        }).catch(err => res.sendStatus(500))

    },

    delete: (req, res) => {
        let db = req.app.get('db');
        const { id } = req.params;//get this from param on url

        db.deleteMessages([id]).then(response => {
            res.status(200).send(response);
        });
    }

}

