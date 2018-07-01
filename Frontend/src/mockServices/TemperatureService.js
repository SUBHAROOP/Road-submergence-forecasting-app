import {
  mockTemperatureData,
  mockAverageDailyTemperatureData,
  mockMonthlyAverageSingleVillage,
  mockMonthlyAverageMultipleVillage,
  mockFiveYearlyMultipleVillage,
  mockFiveYearlySingleVillage,
  mockTenYearlyMultipleVillage,
  mockTenYearlySingleVillage
} from '../mock_data/MockTemperatureData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  getDailyDataFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockTemperatureData()
    })
  },
  getDailyAverageDataFromQuery (queryInput) {
    return delay(1000).then(() => {
      return mockAverageDailyTemperatureData()
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
