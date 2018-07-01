const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
var port = process.env.PORT || 3000
const app = express()
const mongoDB = 'mongodb://bucca:sihmckv@ds119049.mlab.com:19049/buccaneers_backend'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use(morgan('combined'))
app.use(bodyParser.urlencoded())
app.use(cors())
require('./routes')(app)
console.log(port)

app.listen(port)
