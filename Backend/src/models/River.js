const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const River = new Schema({
  _id: {type: Number, required: true},
  RiverName: {type: String, required: true},
  RiverThreshold: {type: Number, required: true}
})

module.exports = Mongoose.model('RiverMasterTable', River)
