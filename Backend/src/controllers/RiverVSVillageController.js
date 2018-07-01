const RiverVsVillage = require('../models/RiverVsVillage')

exports.RiverVsVillageInsert = (req, res) => {
  const River = new RiverVsVillage({
    RiverId: req.body.riverid,
    VillageId: req.body.villageid
  })
  River.save({}, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.json({msg: 'Added'})
    }
  })
}
