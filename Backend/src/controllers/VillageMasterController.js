const VillageData = require('../models/Village')

exports.VillageMasterInsert = (req, res) => {
  if (req.body.uid) {
    const Village = new VillageData({
      _id: req.body.uid,
      VillageName: req.body.name,
      District: req.body.district,
      Tehsil: req.body.tehsil,
      Latitude: req.body.latitude,
      Longitude: req.body.longitude,
      AlarmingZone: req.body.alarmingzone,
      VillageThreshold: req.body.threshold,
      Elevation: req.body.elevation
    })
    VillageData.find({_id: req.body.uid}, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!err && !results.length) {
        Village.save({}, (err) => {
          if (err) {
            console.log(err)
          } else {
            res.json({
              msg: 'ADDEDd'
            })
          }
        })
      } else {
        res.json({
          msg: 'IF'
        })
      }
    })
  } else {
    res.json({msg: 'SWW'})
  }
}
// need to modify
exports.VillageMasterDisplay = (req, res) => {
  // const villagemastername = []
  VillageData.find({_id: {$gt: 1}}, (err, results) => {
    if (err) {
      console.log(err)
    }
    if (!err) {
      if (!results.length) {
        res.json({
          msg: 'NODATAFOUND'
        })
      } else {
        res.json(results)
      }
    }
  })
}
exports.DistrictDisplay = (req, res) => {
  const districtname = []
  const array = []
  VillageData.find({}, (err, results) => {
    if (err) {
      console.log(err)
    }
    if (!err && !results.length) {
      res.json({
        msg: 'NODATAFOUND'
      })
    } else {
      results.map((data) => (districtname.push(data.District)))
    }
    var dis = districtname.filter((v, i, a) => a.indexOf(v) === i)
    for (let i = 0; i < dis.length; i++) {
      array.push({'text': dis[i]})
    }
    res.json(array)
  })
}
exports.TehsilDisplay = (req, res) => {
  const tehsilname = []
  VillageData.find({District: req.body.district}, (err, results) => {
    if (err) {
      console.log(err)
    }
    if (!err && !results.length) {
      res.json({
        msg: 'NODATAFOUND'})
    }
    if (!err) {
      results.map((data) => (tehsilname.push({text: data.Tehsil})))
      res.json(tehsilname)
    }
  })
}

exports.VillageDisplay = (req, res) => {
  const villagename = []
  var array = []
  VillageData.find({Tehsil: req.body.tehsil}, (err, results) => {
    if (err) {
      console.log(err)
    }
    if (!err && results.length) {
      results.map((data) => (villagename.push(data.VillageName)))
      var village = villagename.filter((v, i, a) => a.indexOf(v) === i)
      for (let i = 0; i < village.length; i++) {
        array.push({text: village[i]})
      }
      res.json(array)
    }
  })
}
