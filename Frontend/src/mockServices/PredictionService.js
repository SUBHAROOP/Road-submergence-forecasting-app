import { mockPredictionData } from '../mock_data/MockPredictionData'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  getPredictionData () {
    return delay(1000).then(() => {
      return mockPredictionData()
    })
  }
}
