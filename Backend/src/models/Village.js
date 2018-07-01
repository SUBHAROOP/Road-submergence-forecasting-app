const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Village = new Schema({
  _id: {type: Number, required: true},
  VillageName: {type: String, required: true},
  District: {type: String, required: true},
  Tehsil: {type: String, required: true},
  Latitude: {type: Schema.Types.Mixed, required: true},
  Longitude: {type: Schema.Types.Mixed, required: true},
  AlamingZone: {type: Boolean, default: false},
  VillageThreshold: {type: Number, required: true},
  Elevation: {type: Number, required: true}
})

module.exports = Mongoose.model('VillageMasterTable', Village)
