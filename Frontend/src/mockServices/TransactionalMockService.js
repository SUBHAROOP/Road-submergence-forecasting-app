const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  getDamApiData (apiLocation) {
    return delay(1000).then(() => {
      return {
        damName: 'XYZ',
        damId: 10,
        waterRelease: 20,
        dateOfEvent: new Date()
      }
    })
  },
  getRainfallApiData (apiLocation) {
    return delay(1000).then(() => {
      return {
        villageName: 'V1',
        villageId: 10,
        rainfallAmt: 20,
        dateOfEvent: new Date()
      }
    })
  }
}
