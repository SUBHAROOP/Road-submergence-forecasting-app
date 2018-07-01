const PredictionData = require('../models/PredictionData')

exports.PredictionDatatoANN = (req, res) => {
  var date = []
  var village = []
  var rainfall = []
  var damcontribution = []
  var elevation = []
  var outcome = []
  var responsejson = []
  PredictionData.find({}).then((results) => {
    results.map((data) => {
      date.push(data.Date)
      village.push(data.VillageName)
      elevation.push(data.Elevation)
      damcontribution.push(data.DamContribution)
      outcome.push(data.Output)
      rainfall.push(data.RainContribution)
    })
    for (let i = 0; i < results.length; i++) {
      responsejson.push({DATE: date[i],
        VILLAGE_NAME: village[i],
        RAINFALL_AMOUNT: rainfall[i],
        DAM_CONTRIBUTION: damcontribution[i],
        ELEVATION: elevation[i],
        OUTCOME: outcome[i]})
    }
    res.json(responsejson)
  }).catch((err) => {
    console.log(err)
  })
}

// exports.PredictionOutputInput = (req, res) => {

// }
