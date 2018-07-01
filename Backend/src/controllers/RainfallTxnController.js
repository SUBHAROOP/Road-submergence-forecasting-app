const RainfallTxnTable = require('../models/RainfallTxnTable')
const moment = require('moment')
const PredictionData = require('../models/PredictionDatavillage')
const PredictionDataANN = require('../models/PredictionData')
const VillageData = require('../models/Village')
// To insert Data in Rainfall Txn Table
exports.RainfallTxnTableInsert = (req, res) => {
  if (req.body.name) {
    const RainfallTxt = new RainfallTxnTable({
      MaxRainfall: req.body.maxrainfall,
      MinRainfall: req.body.minrainfall,
      VillageName: req.body.name,
      DateOfRainfall: req.body.date,
      MaxTemp: req.body.maxtemp,
      MinTemp: req.body.mintemp,
      MaxHumi: req.body.maxhumi,
      MinHumi: req.body.minhumi
    })
    PredictionData.find({Date: req.body.date, VillageName: req.body.name}, function (err, results) {
      if (err) {
        console.log(err)
      }
      if (!err && results.length) {
        var avgrainfall = ((parseFloat(req.body.maxrainfall) + parseFloat(req.body.minrainfall)) / 2)
        console.log(avgrainfall)
        console.log(results[0].DamContribution)

        const Prediction = new PredictionDataANN({
          Date: req.body.date,
          VillageName: results[0].VillageName,
          Elevation: results[0].Elevation,
          DamContribution: results[0].DamContribution,
          RainContribution: avgrainfall,
          Output: 0
        })
        Prediction.save({}, function (err) {
          if (err) {
            console.log(err)
          } else {
            console.log('SUCESSSSSSS')
          }
        })
      } else {
        VillageData.find({VillageName: req.body.name}, function (err, results) {
          if (err) {
            console.log(err)
          }
          if (!err && results.length) {
            var avgrainfall = ((parseFloat(req.body.maxrainfall) + parseFloat(req.body.minrainfall)) / 2)
            const Prediction = new PredictionDataANN({
              Date: req.body.date,
              VillageName: results[0].VillageName,
              Elevation: results[0].Elevation,
              DamContribution: results[0].DamContribution,
              RainContribution: avgrainfall,
              Output: 0
            })
            Prediction.save({}, function (err) {
              if (err) {
                console.log(err)
              } else {
                console.log('SUCESSSSSSS')
              }
            })
          } else {
            res.json({
              error: `NO VILLAGE FOUND NAMED ${req.body.name} IN VILLAGE MASTER TABLE`,
              message: 'PLEASE UPDATE YOUR MASTER TABLE THEN INSERT DATA IN THIS TABLE'
            })
          }
        })
      }
    })
    RainfallTxt.save({}, (err) => {
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
// 1
exports.RainfallData = (req, res) => {
  var dates = []
  var maxrain = []
  var minrain = []
  RainfallTxnTable.find({VillageName: req.body.name, DateOfRainfall: {'$gt': req.body.dateFrom, '$lte': req.body.dateTo}}).then((results) => {
    console.log(results)

    results.map((data) => {
      dates.push(moment(data.DateOfRainfall).format('L'))
      maxrain.push(data.MaxRainfall)
      minrain.push(data.MinRainfall)
    })
    console.log(dates)

    var rain = [{name: 'Max Rainfall (in cm)',
      data: maxrain}, {name: 'Min Rainfall (in cm)', data: minrain}]
    res.json({title: 'Rainfall Data',
      chartSubtitle: 'Date wise Rainfall data',
      xAxisSeries: dates,
      xAxisTitle: 'Date',
      tooltip: '',
      yAxisTitle: 'Weather Conditions',
      yAxisSeries: rain
    })
  }).catch((err) => {
    console.log(err)
  })
}

// 2                // sihtoday need to pass the req.body element
exports.AverageDailyRainfallData = (req, res) => {
  var villages2 = []
  var dataarray2 = []
  var dates2 = []
  var dataToPost2 = []
  VillageData.find({District: req.body.district, Tehsil: req.body.tehsil}).then((results) => {
    results.map((data) => {
      villages2.push(data.VillageName)
    })
    console.log(villages2)
    for (let i = 0; i < villages2.length; i++) {
      RainfallTxnTable.find({VillageName: villages2[i], DateOfRainfall: {'$gt': req.body.dateFrom, '$lte': req.body.dateTo}}).then((results) => {
        var datesInner = []
        var dataarray2Inner = []
        var dataToPost2Inner = []

        results.map(function (data) {
          dataarray2Inner.push((parseInt(data.MaxRainfall) + parseInt(data.MinRainfall)) / 2)
          console.log(dataarray2)
          datesInner.push(moment(data.DateOfRainfall).format('L'))
        })
        dataarray2 = dataarray2Inner
        for (let i = 0; i < villages2.length; i++) {
          dataToPost2Inner[i] = {
            name: villages2[i],
            data: dataarray2[i]
          }
          console.log(dataToPost2Inner)
        }
        dataToPost2 = dataToPost2Inner
        dates2 = datesInner
      }).catch((err) => {
        console.log(err)
      })
    }
  }).catch((err) => {
    console.log(err)
  })
  setTimeout(function () {
    res.json({
      title: 'Rainfall Data',
      chartSubtitle: 'Date wise Rainfall data',
      xAxisSeries: dates2,
      xAxisTitle: 'Date',
      tooltip: '',
      yAxisTitle: 'Average Rainfall',
      yAxisSeries: dataToPost2
    })
  }, 3000)
}

// 3
exports.MonthlyAverageSingleVillage = (req, res) => {
  var startdate = moment().subtract(1, 'months').date(1).format('YYYY-MM-DD')
  var enddate = moment().date(0).format('YYYY-MM-DD')
  var rainfall = []
  RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil, VillageName: req.body.name, DateOfRainfall: {'$gte': startdate, '$lte': enddate}}).then((results) => {
    results.map((data) => { rainfall.push(((parseInt(data.MaxRainfall) + parseInt(data.MinRainfall)) / 2)) })
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

exports.MonthlyAverageMultipleVillage = (req, res) => {
  var startdate = moment().subtract(1, 'months').date(1).format('YYYY-MM-DD')
  var enddate = moment().date(0).format('YYYY-MM-DD')
  // var rainfall = []
  var village = []
  var dates = []
  var villageNames = []
  RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil, DateOfRainfall: {'$gte': startdate, '$lte': enddate}}).then((results) => {
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
          arr2.push((parseInt(results[j].MaxRainfall) + parseInt(results[j].MinRainfall)) / 2)
        }
      }
      arr1.push(arr2)
    }
    for (let i = 0; i < vil.length; i++) {
      village.push({name: vil[i],
        marker: {
          symbol: 'square'
        },
        data: arr1[i]})
    }
    // var d = dates.filter((v, i, a) => a.indexOf(v) === i)
    console.log(moment().subtract(5, 'years').format('YYYY-MM-DD'))
    console.log(moment().startOf('year').date(0))

    res.json({
      chartTitle: ' Monthly Data',
      chartSubtitle: '',
      xAxisCategories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      yAxisTitle: 'Rainfall',
      series: village
    })
  }).catch((err) => {
    console.log(err)
  })
}

exports.FiveYearlySingleVillge = (req, res) => {
  var NumberofYears = []
  var NumberofYYYY = []
  // var array = []
  var add

  for (let i = 0; i < 6; i++) {
    NumberofYears.push(moment().subtract(i, 'years').startOf('year').format('YYYY-MM-DD'))
  }
  // console.log(NumberofYears.length)
  for (let i = 5; i > 0; i--) {
    NumberofYYYY.push(moment().subtract(i, 'years').format('YYYY'))
  }
  for (let i = 0; i < 5; i++) {
    RainfallTxnTable.find({District: req.body.district, Tehsil: req.body.tehsil, VillageName: req.body.name, DateOfRainfall: {'$gte': NumberofYears[i + 1], '$lt': NumberofYears[i]}}, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!err) {
        add = 0
        var avgrainfall = []
        results.map((data) => {
          avgrainfall.push(((parseInt(data.MaxRainfall) + parseInt(data.MinRainfall)) / 2))
        })
        console.log(avgrainfall.length)
        avgrainfall.map((data) => {
          add = add + data
        })
        console.log(avgrainfall[i].length)

        // array.push(add/)
        if (avgrainfall.length > 4) {
          res.json({
            chartTitle: '5 Year Average Data',
            chartSubTitle: '',
            xAxisTitle: '5 Year Average Data',
            xAxisCategories: NumberofYYYY,
            yAxisTitle: 'Rainfall',
            seriesName: req.body.name,
            series: [{
              name: req.body.name,
              marker: {
                symbol: 'square'
              },
              data: avgrainfall
            }]
          })
        }
      }
    })
  }
}

exports.FiveYearlyMultipleVillge = (req, res) => {
  var NumberofYears = []
  // const array = []
  for (let i = 0; i < 6; i++) {
    NumberofYears.push(moment().subtract(i, 'years').startOf('year').format('YYYY-MM-DD'))
  }
  var NumberofYYYY = []
  for (let i = 5; i >= 0; i--) {
    NumberofYYYY.push(moment().subtract(i, 'years').format('YYYY'))
  }
  console.log(NumberofYYYY)
  for (let i = 0; i < NumberofYears.length - 1; i++) {
    RainfallTxnTable.find({DateOfRainfall: {'$gte': NumberofYears[i + 1], '$lt': NumberofYears[i]}}).then((results) => {
      var village = []
      var villageNames = []
      // var track = []
      for (let i = 0; i < results.length; i++) {
        villageNames.push(results[i].VillageName)
      }
      var vil = villageNames.filter((v, i, a) => a.indexOf(v) === i)
      var arr1 = []
      for (let i = 0; i < vil.length; i++) {
        var arr2 = []
        for (let j = 0; j < results.length; j++) {
          if (results[j].VillageName === vil[i]) {
            arr2.push((parseInt(results[j].MaxRainfall) + parseInt(results[j].MinRainfall)) / 2)
          }
        }
        arr1.push(arr2)
      }
      console.log(arr1)

      // for (let i = 0; i < vil.length; i++) {
      //   village.push({name: vil[i],
      //     data: arr1[i]})
      // }
      // console.log(village)
      if (i === 4) {
        res.json({
          title: 'Rainfall Data',
          chartSubtitle: 'Date wise Rainfall data',
          xAxisSeries: '',
          xAxisTitle: 'Date',
          tooltip: '',
          yAxisTitle: 'Average Rainfall',
          yAxisSeries: village
        })
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
