const UserController = require('./controllers/UserController')
const UploadController = require('./controllers/UploadController')
const VillageMasterController = require('./controllers/VillageMasterController')

module.exports = function (app) {
  app.post('/register', UserController.create_user)
  app.post('/login', UserController.login_user)
  app.post('/upload_dam', UploadController.damfile)
  app.post('/upload_rainfall', UploadController.rainfallfile)
  app.post('/villagemasterpost', VillageMasterController.VillageMasterInsert)
}
