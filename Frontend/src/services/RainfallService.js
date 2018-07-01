import Api from '@/services/Api'

export default {
  getDailyDataFromQuery (queryInput) {
    return Api().post('rainfall/daily', queryInput)
  },
  getDailyAverageDataFromQuery (queryInput) {
    return Api().post('rainfall/daily', queryInput)
  },
  getMonthlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('rainfall/monthly', queryInput)
  },
  getMonthlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('rainfall/monthly', queryInput)
  },
  getFiveYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('rainfall/fiveYearly', queryInput)
  },
  getFiveYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('rainfall/fiveYearly', queryInput)
  },
  getTenYearlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('rainfall/tenYearly', queryInput)
  },
  getTenYearlyAverageMultipleVillageFromQuery (queryInput) {
    return Api().post('rainfall/tenYearly', queryInput)
  }
}
