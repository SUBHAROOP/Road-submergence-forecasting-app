import Api from '@/services/Api'

export default {
  getPredictionData () {
    return Api().get('prediction')
  }
}
