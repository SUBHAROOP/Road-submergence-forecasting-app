import Api from '@/services/Api'

export default {
  createUser (userData) {
    console.log(userData)
    return Api().post('user', userData)
  }
}
