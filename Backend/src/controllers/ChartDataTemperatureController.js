const RainfallTxnTable = require('../models/RainfallTxnTable')
const moment = require('moment')
exports.TempData = (req, res) => {
  var Maxtemp = []
  var Mintemp = []
  var Dates = []
  RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil, VillageName: req.body.name, DateOfRainfall: {'$gt': '2017-01-02', '$lt': '2017-03-02'}})
    .then((results) => {
      results.map((data) => {
        Dates.push(moment(data.DateOfRainfall).format('L'))
        Mintemp.push(data.MinTemp)
        Maxtemp.push(data.MaxTemp)
      })
      res.json({
        title: 'Temperature Data',
        chartSubTitle: 'Date wise temperature data',
        xAxisSeries: Dates,
        xAxisTitle: 'Date',
        tooltip: '',
        yAxisTitle: 'Weather Conditions',
        yAxisSeries: [
          {
            name: 'Max Temperature(degree Cenrigate)',
            data: Maxtemp
          },
          {
            name: 'Min Temperature(degree Cenrigate)',
            data: Mintemp
          }
        ]
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
exports.AverageDailyTemperatureData = (req, res) => {
  RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil}).then((results) => {
    var village = []
    var dates = []
    var villageNames = []
    for (let i = 0; i < results.length; i++) {
      villageNames.push(results[i].VillageName)
      dates.push(moment(results[i].DateOfRainfall).format('L'))
    }
    var vil = villageNames.filter((v, i, a) => a.indexOf(v) === i)
    var arr1 = []
    for (let i = 0; i < vil.length; i++) {
      var arr2 = []
      for (let j = 0; j < results.length; j++) {
        if (results[j].VillageName === vil[i]) {
          arr2.push((parseInt(results[j].MaxTemp) + parseInt(results[j].MinTemp)) / 2)
        }
      }
      arr1.push(arr2)
    }
    for (let i = 0; i < vil.length; i++) {
      village.push({name: vil[i],
        data: arr1[i]})
    }
    var d = dates.filter((v, i, a) => a.indexOf(v) === i)
    res.json({
      title: 'Temperature Data',
      chartSubTitle: 'Date wise temperature data',
      xAxisSeries: d,
      xAxisTitle: 'Date',
      tooltip: '',
      yAxisTitle: 'Average Temperature',
      yAxisSeries: village
    })
  })
    .catch((err) => {
      console.log(err)
    })
}

exports.MonthlyAverageSingleVillage = (req, res) => {
  var startdate = moment().subtract(1, 'months').date(1).format('YYYY-MM-DD')
  var enddate = moment().date(0).format('YYYY-MM-DD')
  var rainfall = []
  RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil, VillageName: req.body.name, DateOfRainfall: {'$gte': startdate, '$lte': enddate}}).then((results) => {
    results.map((data) => { rainfall.push(((parseInt(data.MaxTemp) + parseInt(data.MinTemp)) / 2)) })
    res.json({
      chartTitle: 'Last Month\'s Data',
      chartSubtitle: '',
      xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // need to modify
      seriesName: req.body.name,
      // seriesName:req.body.village,
      series: [{
        // name:req.body.village,
        name: req.body.name,
        marker: {
          symbol: 'square'
        },
        data: rainfall
      }]
    })
  }).catch((err) => {
    if (err) {
      console.log(err)
    }
  })
}
