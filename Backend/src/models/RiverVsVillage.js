const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const RiverVsVillage = new Schema({
  RiverId: {type: Number, required: true},
  VillageId: {type: Number, required: true}
})

module.exports = Mongoose.model('RiverVsVillage', RiverVsVillage)
