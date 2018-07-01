const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Dam = new Schema({
  _id: {type: Number, required: true},
  DamName: {type: String, required: true},
  DamCapacity: {type: Number, required: true},
  Longitude: {type: Schema.Types.Mixed, required: true},
  Latitude: {type: Schema.Types.Mixed, required: true}
})

module.exports = Mongoose.model('DamMasterTable', Dam)
