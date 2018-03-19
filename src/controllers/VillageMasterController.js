const VillageData = require('../models/Village')

exports.VillageMasterInsert = (req, res) => {
  if (req.body.id) {
    const Village = new VillageData({
      VillageId: req.body.id,
      VillageName: req.body.name,
      District: req.body.district,
      Latitude: req.body.latitude,
      Longitude: req.body.longitude,
      AlarmingZone: req.body.alarmingzone,
      VillageThreshold: req.body.threshold
    })
    VillageData.find({VillageId: req.body.id}, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!err) {
        Village.save({}, (err) => {
          if (err) {
            console.log(err)
          } else {
            res.json({
              msg: 'ADDED'
            })
          }
        })
      }
    })
  } else {
    res.json({msg: 'SWW'})
  }
}
