const DamData = require('../models/Dam')

exports.DamMasterInsert = (req, res) => {
  if (req.body.uid) {
    console.log(req.body.latitude)

    const Dam = new DamData({
      _id: req.body.uid,
      DamName: req.body.name,
      DamCapacity: req.body.capacity,
      Longitude: req.body.longitude,
      Latitude: req.body.latitude
    })
    DamData.find({_id: req.body.id}, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!err && !results.length) {
        Dam.save({}, (err) => {
          if (err) {
            console.log(err)
          } else {
            res.json({
              msg: 'ADDED'
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
