const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const PredictionDatabase = new Schema({
  Date: {type: Date},
  VillageName: {type: String},
  Elevation: {type: Number},
  DamContribution: {type: Number},
  RainContribution: {type: Number},
  Output: {type: Number, default: 0}
})

module.exports = Mongoose.model('ANN_FEED', PredictionDatabase)
