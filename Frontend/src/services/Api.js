import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://evening-shore-25238.herokuapp.com'
  })
}
