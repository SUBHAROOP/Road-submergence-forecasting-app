const UserController = require('./controllers/UserController')
const VillageMasterController = require('./controllers/VillageMasterController')
const RiverMasterController = require('./controllers/RiverMasterController')
const DamMasterController = require('./controllers/DamMasterController')
const DamTxnController = require('./controllers/DamTxnController')
const RainfallTxnController = require('./controllers/RainfallTxnController')
const xyz = require('./controllers/xyz')
const DamVsRiver = require('./controllers/DamVSRiverController')
const RiverVsVillage = require('./controllers/RiverVSVillageController')
const PredictionController = require('./controllers/PredictionController')
const ChartData = require('./controllers/ChartDataTemperatureController')
const ChartDataH = require('./controllers/ChartDataHumidityController')
const PredictionToFrontend = require('./controllers/PredictionToFrontendController')

// To test this routes with postman use --> app.use(bodyParser.urlencoded()) in ./app.js
// type in x-www-form-urlencoded
//
// To deploy this routes use app.use(bodyParser.json())
//

module.exports = function (app) {
  app.get('/', xyz.test) // test route
  app.post('/register', UserController.create_user) // tested okay
  app.post('/login', UserController.login_user) // tested okay
  // village
  app.post('/villagemasterpost', VillageMasterController.VillageMasterInsert) // tested okay
  app.post('/test', VillageMasterController.VillageMasterDisplay) // tested okay
  app.post('/test/district', VillageMasterController.DistrictDisplay)// tested okay
  app.post('/test/district/tehsil', VillageMasterController.TehsilDisplay)// tested okay
  app.post('/test/district/tehsil/village', VillageMasterController.VillageDisplay)// tested okay
  // river
  app.post('/rivermasterpost', RiverMasterController.RiverMasterInsert) // tested okay
  app.post('/rivervsvillage', RiverVsVillage.RiverVsVillageInsert) // testing not required
  // dam
  app.post('/dammasterpost', DamMasterController.DamMasterInsert) // tested okay
  app.post('/damtxninsert', DamTxnController.DamTxnTableInsert)// tested okay
  app.post('/damvsriver', DamVsRiver.DamVsRiverInsert) // testing not required
  app.post('/damdata', DamTxnController.DamData) // tested okay
  app.post('/all/dam', DamTxnController.MonthlyAverageSingleDam) // dev build stage
  // rainfall
  app.post('/rainfalltxninsert', RainfallTxnController.RainfallTxnTableInsert) // tested okay
  app.post('/rainfalldata', RainfallTxnController.RainfallData) // tested okay
  app.post('/average/daily/rainfalldata', RainfallTxnController.AverageDailyRainfallData) // dev build stage
  app.post('/rainfalltxn/single/monthly', RainfallTxnController.MonthlyAverageSingleVillage) // dev build stage
  app.post('/avg/rainfall/multiple', RainfallTxnController.MonthlyAverageMultipleVillage) // dev build stage
  app.post('/five/single/village', RainfallTxnController.FiveYearlySingleVillge) // dev build stage
  app.post('/five/Multiple/village', RainfallTxnController.FiveYearlyMultipleVillge) // not ready
  // ANN feed
  app.get('/feed/ann', PredictionController.PredictionDatatoANN) // tested okay
  // Temp and humidity
  app.post('/temp/daterange', ChartData.TempData) // tested okay
  app.post('/temp/daterange/multiple', ChartData.AverageDailyTemperatureData) // tested okay
  app.post('/temp/monthly/average', ChartData.MonthlyAverageSingleVillage) // tested okay
  app.post('/humi/daterange', ChartDataH.HumiData)// tested okay
  app.post('/humi/daterange/avg', ChartDataH.AverageDailyHumiData) // tested okay
  app.post('/temp/monthly/avg/single', ChartDataH.MonthlyAverageSingleVillage) // tested okay
  // prediction feed
  app.post('/predictionfeed', PredictionToFrontend.LatestPredictionData) // tested okay
}
