import Api from '@/services/Api'

export default {
  saveOutput (output) {
    return Api().post('prediction', output)
  }
}
