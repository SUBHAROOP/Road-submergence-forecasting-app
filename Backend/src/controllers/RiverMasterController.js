const RiverData = require('../models/River')

exports.RiverMasterInsert = (req, res) => {
  if (req.body.uid) {
    const River = new RiverData({
      _id: req.body.uid,
      RiverName: req.body.name,
      RiverThreshold: req.body.threshold
    })
    RiverData.find({_id: req.body.id}, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!err && !results.length) {
        River.save({}, (err) => {
          if (err) {
            console.log(err)
          } else {
            res.json({msg: 'ADDED'})
          }
        })
      } else {
        res.json({
          msg: 'IF'
        })
      }
    })
  } else {
    res.json({
      msg: 'SWW'
    })
  }
}
