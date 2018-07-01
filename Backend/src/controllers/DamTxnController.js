const DamTxnTable = require('../models/DamTxnTable')
const moment = require('moment')
const DamVsRiver = require('../models/DamVsRiver')
const RiverVsVillage = require('../models/RiverVsVillage')
const DamData = require('../models/Dam')
const VillageData = require('../models/Village')
var RiverData = require('../models/River')
const PredictionData = require('../models/PredictionDatavillage')
var arr = []
exports.DamTxnTableInsert = function (req, res) {
  if (req.body.name) {
    const DamTxn = new DamTxnTable({
      DamName: req.body.name,
      Date: req.body.date,
      ReleasedWater: req.body.water,
      Drainage: req.body.drainage
    })
    DamData.find({DamName: req.body.name}, function (err, results) {
      if (err) {
        console.log(err)
      }
      if (!err && results.length) {
        DamVsRiver.find({DamId: results[0].id}, function (err, results) {
          if (err) {
            console.log(err)
          }
          if (!err) {
            RiverVsVillage.find({RiverId: results[0].RiverId}, function (err, results) {
              if (err) {
                console.log(err)
              }
              if (!err) {
                results.map((data) => {
                  arr.push(data.VillageId)
                })
                RiverData.find({_id: results[0].RiverId}, function (err, results) {
                  if (err) {
                    console.log(err)
                  }
                  if (!err) {
                    var extrawaterfromdam = (parseInt(req.body.water) - parseInt(req.body.drainage))
                    console.log(parseInt(results[0].RiverThreshold))
                    console.log(extrawaterfromdam)
                    if (extrawaterfromdam > parseInt(results[0].RiverThreshold)) {
                      console.log('check')
                      var extrawaterfromriver = extrawaterfromdam - parseInt(results[0].RiverThreshold)
                      for (let i = 0; i < arr.length; i++) {
                        VillageData.find({_id: arr[i]}, function (err, results) {
                          if (err) {
                            console.log(err)
                          }
                          if (!err) {
                            if (extrawaterfromriver > parseInt(results[0].VillageThreshold)) {
                              extrawaterfromriver = extrawaterfromriver - parseInt(results[0].VillageThreshold)
                              const Prediction = new PredictionData({
                                Date: req.body.date,
                                VillageName: results[0].VillageName,
                                Elevation: results[0].Elevation,
                                DamContribution: (extrawaterfromriver / 10)
                              })
                              Prediction.save({}, function (err) {
                                if (err) {
                                  console.log(err)
                                }
                                if (!err) {
                                  console.log('okay')
                                }
                              })
                            }
                          }
                        })
                      }
                    } else {
                      console.log('no overflow')
                    }
                  }
                })
              }
            })
          }
        })
      }
    })
    console.log(arr)
    DamTxn.save({}, (err) => {
      if (err) {
        console.log(err)
        res.json({msg: 'FAILED'})
      } else {
        res.json({msg: 'ADDED'})
      }
    })
  } else {
    res.json({msg: 'SWW'})
  }
}

exports.DamData = (req, res) => {
  var dates = []
  var waterrelease = []
  DamTxnTable.find({DamName: req.body.name, Date: {'$gt': req.body.datefrom, '$lt': req.body.dateTo}}).then((results) => {
    results.map((data) => {
      dates.push(moment(data.Date).format('L'))
      waterrelease.push(data.ReleasedWater)
    })

    res.json({title: 'Dam Data',
      chartSubTitle: 'Date wise Dam data',
      xAxisSeries: dates,
      xAxisTitle: 'Date',
      tooltip: '',
      yAxisTitle: 'Weather Conditions',
      markers: [{
        position: { lat: 21.91992, lng: 73.82342 }
      }],
      yAxisSeries: [
        {
          name: 'Max Dam Release',
          data: waterrelease
        }
      ]})
  }).catch((err) => {
    console.log(err)
  })
}

exports.MonthlyAverageSingleDam = (req, res) => {
  var startdate = moment().startOf('month').format('YYYY-MM-DD')
  var enddate = moment().endOf('month').format('YYYY-MM-DD')
  console.log(startdate)
  console.log(enddate)

  DamTxnTable.find({DamName: req.body.name, Date: {'$gt': startdate, '$lt': enddate}}).then((results) => {
    var waterrelease = []
    results.map((data) => { waterrelease.push(data.ReleasedWater) })
    res.json({
      chartTitle: 'Monthly Average Data',
      chartSubTitle: '',
      xAxisTitle: 'Week',
      markers: [{
        position: { lat: 21.91992, lng: 73.82342 }
      }],
      xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      yAxisTitle: 'Temperature',
      seriesName: req.body.name,
      series: [{
        name: req.body.name,
        marker: {
          symbol: 'square'
        },
        data: waterrelease
      }]
    })
  }).catch((err) => {
    if (err) {
      console.log(err)
    }
  })
}
