import Api from '@/services/Api'

export default {
  login (credentials) {
    console.log(credentials)
    return Api().get('login', credentials)
  }
}
