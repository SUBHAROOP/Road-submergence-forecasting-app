const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  login (credentials) {
    return delay(1000).then(() => {
      if (credentials.password === 'admin') {
        return {data: {msg: 'LSA'}}
      } else if (credentials.password === 'user') {
        return { data: { msg: 'LSU' } }
      } else {
        return 'error'
      }
    })
  }
}
