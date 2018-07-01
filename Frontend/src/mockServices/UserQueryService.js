import * as selectData from '../mock_data/MockSelectData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  getDistrictNames () {
    return delay(1000).then(() => {
      return selectData.selectDistrict()
    })
  },
  getTehsilNames (districtName) {
    return delay(1000).then(() => {
      return selectData.selectTehsil(districtName)
    })
  },
  getVillageNames (tehsilName) {
    return delay(1000).then(() => {
      return selectData.selectVillages(tehsilName)
    })
  },
  getOutput () {
    return delay(1000).then(() => {
      return selectData.selectOutputVal()
    })
  }
}
