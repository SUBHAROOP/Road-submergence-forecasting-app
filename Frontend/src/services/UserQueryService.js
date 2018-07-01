import Api from '@/services/Api'

export default {
  getDistrictNames () {
    return Api().post('test/district')
  },
  getTehsilNames (districtName) {
    return Api().post('test/district/tehsil', districtName)
  },
  getVillageNames (tehsilName) {
    return Api().post('test/district/tehsil/village', tehsilName)
  },
  getDamNames () {
    return Api().get('dam')
  }
}
