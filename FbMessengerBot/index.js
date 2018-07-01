'use script'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', function(req,res) {
	res.send('Hello everyone! I am first get called print statement')
})

app.get('/webhook/', function(req,res) {


	if(req.query['hub.verify_token'] === 'myCustomToken123') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
	console.log(messaging_events+' is')
    for (let i = 0; i < messaging_events.length; i++) {
      let event = req.body.entry[0].messaging[i]
      let sender = event.sender.id
        if (!(event.message && event.message.text)) {
        } else {
            let text = event.message.text
            //text = text.toLowerCase()
            if (text === 'Predict') {
                sendGenericMessage(sender)
                continue
            }
            if (event.message.text === 'Village 1') {
  	    		//let text = JSON.stringify(event.postback.payload)
  	   			 sendTextMessage(sender, "31/03/2018 - 20% probability of Submergence")
  	    	continue
  	    	}
  	    	if (event.message.text === 'Village 2') {
  	    		//let text = JSON.stringify(event.postback.payload)
  	   			 sendTextMessage(sender, "31/03/2018 - 36% probability of Submergence")
  	    	continue
  	    	}
  	    	if (event.message.text === 'Village 3') {
  	    		//let text = JSON.stringify(event.postback.payload)
  	   			 sendTextMessage(sender, "31/03/2018 - 28% probability of Submergence")
  	    	continue
  	    	}
  	    	if (event.message.text === 'Village 4') {
  	    		//let text = JSON.stringify(event.postback.payload)
  	   			 sendTextMessage(sender, "31/03/2018 - 0% probability of Submergence")
  	    	continue
  	    	}
            sendTextMessage(sender, "Type Predict to continue")
        }
        if (event.postback) {
  	    let text = JSON.stringify(event.postback.payload)
  	    sendTextMessage(sender, text.substring(0, 200), token)
  	    continue
      }

    }
    res.sendStatus(200)
  })

const token = "EAAXbwIpeP4kBAIH8Xx3KmJnpcMCJqgvsvn2QzZCfZBeCGx0fKlCmLKhHIZApZAUtWGTDQ8w1bBIu3PcoDGLGUyRXvO4z1AKDxmS46vyeP3SEtxIYk1ZBcjciATDw549oUlTZCQyrFXHLsHCcEeaB0AtLnr4nOJGBgjOo54taGZCZCwZDZD"

function sendTextMessage(sender, text) {
    let messageData = { text:text }
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
		json: {
		    recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
		    console.log('Error sending messages: ', error)
		} else if (response.body.error) {
		    console.log('Error: ', response.body.error)
	    }
    })
}

function sendGenericMessage(sender) {
    let messageData = {
	    "attachment": {
		    "type": "template",
		    "payload": {
				"template_type": "generic",
			    "elements": [{
					"title": "Welcome!",
				    /*"subtitle": "Element #1 of an hscroll",*/
				    "image_url": "https://karimation.herokuapp.com/img/portfolio/meteos.jpg",
				    "buttons": [{
					   // "type": "postback",
					   // "title": "Weather details",
					    //"payload": "Successfully clicked Weather button",
				   // }, 
					    "type": "postback",
					    "title": "Road submergence Prediction",
					    "payload": "Enter Village",
				    }],
			    }/*, {
				    "title": "Second card",
				    "subtitle": "Element #2 of an hscroll",
				    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
				    "buttons": [{
					    "type": "postback",
					    "title": "Postback",
					    "payload": "Payload for second element in a generic bubble",
			-	    }],
			    }*/]
		    }
	    }
    }
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
	    json: {
		    recipient: {id:sender},
		    message: messageData,
	    }
    }, function(error, response, body) {
	    if (error) {
		    console.log('Error sending messages: ', error)
	    } else if (response.body.error) {
		    console.log('Error: ', response.body.error)
	    }
    })
}
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})

