var User = require('../models/User.js')
exports.create_user = function (req, res) {
  const user = new User({
    name: req.body.email,
    password: req.body.password
  })

  User.find({name: req.body.email}, function (err, results) {
    if (err) {
      console.log(err)
    }

    if (!err && !results.length) {
      user.save(function (err) {
        if (err) {
          console.log(err)
        } else {
          res.send({
            msg: 'URS'
          })
        }
      })
    } else {
      res.send({
        msg: 'URF'
      })
    }
  })
}

exports.login_user = function (req, res) {
  User.find({name: req.body.email, password: req.body.password}, function (err, results) {
    if (err) {
      console.log(err)
    }

    if (!err && results.length) {
      res.send({
        msg: 'LS'
      })
    } else {
      res.send({
        msg: 'LF'
      })
    }
  })
}
