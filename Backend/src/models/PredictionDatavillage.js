const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const PredictionDatavillage = new Schema({
  Date: {type: Date, required: true},
  VillageName: {type: String, required: true},
  Elevation: {type: Number, required: true},
  DamContribution: {type: Number, required: true}
})

module.exports = Mongoose.model('prediction_feed', PredictionDatavillage)
