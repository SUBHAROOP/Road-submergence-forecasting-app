import {
  mockRainfallData,
  mockAverageDailyRainfallData,
  mockMonthlyAverageSingleVillage,
  mockMonthlyAverageMultipleVillage,
  mockFiveYearlyMultipleVillage,
  mockFiveYearlySingleVillage,
  mockTenYearlyMultipleVillage,
  mockTenYearlySingleVillage
} from '../mock_data/MockRainfallData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  getDailyDataFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockRainfallData()
    })
  },
  getDailyAverageDataFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockAverageDailyRainfallData()
    })
  },
  getMonthlyAverageSingleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockMonthlyAverageSingleVillage()
    })
  },
  getMonthlyAverageMultipleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockMonthlyAverageMultipleVillage()
    })
  },
  getFiveYearlyAverageSingleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockFiveYearlySingleVillage()
    })
  },
  getFiveYearlyAverageMultipleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockFiveYearlyMultipleVillage()
    })
  },
  getTenYearlyAverageSingleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockTenYearlySingleVillage()
    })
  },
  getTenYearlyAverageMultipleVillageFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockTenYearlyMultipleVillage()
    })
  }
}
