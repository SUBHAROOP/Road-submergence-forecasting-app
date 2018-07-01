const DamVsRiver = require('../models/DamVsRiver')

exports.DamVsRiverInsert = (req, res) => {
  const Dam = new DamVsRiver({
    DamId: req.body.damid,
    RiverId: req.body.riverid
  })
  Dam.save({}, (err) => {
    if (err) {
      console.log(err)
    } else {
      res.json({msg: 'added'})
    }
  })
}
