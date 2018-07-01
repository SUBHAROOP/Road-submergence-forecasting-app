import Api from '@/services/Api'
// import axios from 'axios'
export default {
  saveApiEndpoints (input) {
    return Api().post('apiEndpoints', input)
  },
  saveDamInput (input) {
    return Api().post('damtxninsert', input)
  },
  saveRainfallInput (input) {
    return Api().post('rainfalltxninsert', input)
  }
}
