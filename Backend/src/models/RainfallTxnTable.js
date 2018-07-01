const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const RainfallTxnTable = new Schema({
  MaxRainfall: {type: Schema.Types.Mixed, required: true},
  MinRainfall: {type: Schema.Types.Mixed, required: true},
  VillageName: {type: String, required: true},
  DateOfRainfall: {type: Date, required: true},
  MaxTemp: {type: Schema.Types.Mixed, required: true},
  MinTemp: {type: Schema.Types.Mixed, required: true},
  MaxHumi: {type: Schema.Types.Mixed, required: true},
  MinHumi: {type: Schema.Types.Mixed, required: true}
})

module.exports = Mongoose.model('RainfallTxnTable', RainfallTxnTable)
