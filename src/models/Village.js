const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Village = new Schema({
  VillageId: {type: String, required: true, unique: true},
  VillageName: {type: String, required: true, unique: true},
  District: {type: String, required: true},
  Latitude: {type: Schema.Types.Mixed, required: true},
  Longitude: {type: Schema.Types.Mixed, required: true},
  AlamingZone: {type: Boolean, default: false},
  VillageThreshold: {type: Number, required: true}
})

module.exports = Mongoose.model('VillageMasterTable', Village)
