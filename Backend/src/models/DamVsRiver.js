const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const DamVsRiver = new Schema({
  DamId: {type: Number, required: true},
  RiverId: {type: Number, required: true}
})

module.exports = Mongoose.model('DamVsRiver', DamVsRiver)
