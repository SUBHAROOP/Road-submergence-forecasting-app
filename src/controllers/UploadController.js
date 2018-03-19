// To handle Dam related file Uploads
exports.damfile = (req, res) => {
  if (req.files.upfile) {
    let file = req.files.upfile
    let name = file.name
    var UploadDamfilePath = UploadDamfilePath + name
    if (['xls', 'xlsx'].indexOf(name.split('.')[name.split('.').length - 1]) === -1) {
      res.send('Only xls and xlsx formats are supported')
    } else {
      file.mv(UploadDamfilePath, function (err) {
        if (err) {
          console.log('File Upload Failed', name, err)
          res.send(err)
        } else {
          console.log('File Uploaded', name)
          res.send('Done! Uploading files')
        }
      })
    }
  } else {
    res.send('No File selected !')
    res.end()
  }
}

// To handle Rainfall related file Uploads
exports.rainfallfile = (req, res) => {
  if (req.files.upfile) {
    let file = req.files.upfile
    let name = file.name
    var UploadRainfallfilePath = UploadRainfallfilePath + name
    if (['xls', 'xlsx'].indexOf(name.split('.')[name.split('.').length - 1]) === -1) {
      res.send('Only xls and xlsx formats are supported')
    } else {
      file.mv(UploadRainfallfilePath, function (err) {
        if (err) {
          res.send('File Upload Failed', err)
        } else {
          res.send('Done! Uploading files')
        }
      })
    }
  } else {
    res.send('No File selected !')
    res.end()
  }
}
