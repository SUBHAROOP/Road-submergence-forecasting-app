import Api from '@/services/Api'

export default {
  getDailyDataFromQuery (queryInput) {
    return Api().post('damdata', queryInput)
  },
  getMonthlyAverageSingleVillageFromQuery (queryInput) {
    return Api().post('all/dam', queryInput)
  }
}
