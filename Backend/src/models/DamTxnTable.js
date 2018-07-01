const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const DamTxnTable = new Schema({
  DamName: {type: String, required: true},
  Date: {type: Date, required: true},
  ReleasedWater: {type: Schema.Types.Mixed, required: true},
  Drainage: {type: Schema.Types.Mixed, required: true}
})

module.exports = Mongoose.model('DamTxnTable', DamTxnTable)
