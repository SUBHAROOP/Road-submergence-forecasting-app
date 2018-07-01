import Api from '@/services/Api'

export default {
  getDailyDataFromQuery (queryInput) {
    return Api().post('temperature/daily', queryInput)
  },
  getDailyAverageDataFromQuery (queryInput) {
    return Api().post('temperature/daily', queryInput)
  },
  getMonthlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('temperature/monthly', queryInput)
  },
  getMonthlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('temperature/monthly', queryInput)
  },
  getFiveYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('temperature/fiveYearly', queryInput)
  },
  getFiveYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('temperature/fiveYearly', queryInput)
  },
  getTenYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('temperature/tenYearly', queryInput)
  },
  getTenYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('temperature/tenYearly', queryInput)
  }
}
