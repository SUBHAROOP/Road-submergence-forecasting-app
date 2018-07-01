const PredictionTable = require('../models/PredictionData')
const VillageData = require('../models/PredictionData')
const moment = require('moment')
exports.LatestPredictionData = (req, res) => {
  const DateNow = moment().format('YYYY-MM-DD')
  console.log(DateNow)
  VillageData.find(({District: req.body.district, Tehsil: req.body.tehsil})).then((results) => {
    results.map((data) => {
      PredictionTable.find({VillageName: data.VillageName, Date: {'$gte': DateNow, '$lt': '2018-04-12'}}).then((results) => {
        console.log('working')
        res.json(results)
      }).catch((err) => {
        console.log(err)
      })
    })
  }).catch((err) => {
    console.log(err)
  })
}
