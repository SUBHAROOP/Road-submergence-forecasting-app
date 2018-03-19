const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
var fileupload = require('express-fileupload')
const path = require('path')
// const xlsxj = require('xlsx-to-json')
const UploadDamfilePath = path.join(__dirname, '..', 'Damuploads')
const UploadRainfallfilePath = path.join(
  __dirname,
  '..',
  'Rainfallfileuploads'
)
const app = express()
const mongoDB = 'mongodb://bucc_back:sihmckv@ds047484.mlab.com:47484/buccaneers_backend_db'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())
app.use(fileupload())
require('./routes')(app)
// xlsxj(
//   {
//     input: path.join(__dirname, '..', 'Damuploads', 'gitbooks.xlsx'),
//     output: 'output.json',
//     sheet: 'tags'
//   },
//   function (err, result) {
//     if (err) {
//       console.error(err)
//     } else {
//       console.log(result)
//     }
//   }
// )

app.listen(8082)
