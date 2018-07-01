import Api from '@/services/Api'

export default {
  getDailyDataFromQuery (queryInput) {
    return Api().post('humidity/daily', queryInput)
  },
  getDailyAverageDataFromQuery (queryInput) {
    return Api().post('humidity/daily', queryInput)
  },
  getMonthlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('humidity/monthly', queryInput)
  },
  getMonthlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('humidity/monthly', queryInput)
  },
  getFiveYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('humidity/fiveYearly', queryInput)
  },
  getFiveYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('humidity/fiveYearly', queryInput)
  },
  getTenYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('humidity/tenYearly', queryInput)
  },
  getTenYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('humidity/tenYearly', queryInput)
  }
}
