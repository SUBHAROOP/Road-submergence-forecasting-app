<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <panel title="Login"/>
      <v-card-media
        src="/static/images/logo.png" height="250px"
      >
      </v-card-media>
      <v-card-text>
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          name="password"
          label="Enter your password"
          v-model="password"
          min="8"
          :append-icon="vis ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (vis = !vis)"
          :type="vis ? 'password' : 'text'"
        ></v-text-field>
        <div class="danger-alert" v-html="error"/>
        <br/>
        <v-btn
          dark
          large
          style="left: 40%"
          class="cyan"
          @click="login">
          Login
        </v-btn>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '../mockServices/AuthenticationService'
import storage from 'local-storage-fallback'
// const logo = require('../assets/logo.png')
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    error: null,
    vis: false
  }),
  methods: {
    login () {
      AuthenticationService.login({
        email: this.email,
        password: this.password
      }).then(res => {
        if (res.data.msg === 'LSA') {
          storage.setItem('user', {
            email: this.email,
            role: 'admin'
          })
          this.$router.push({
            name: 'AdminDashboard'
          })
        } else if (res.data.msg === 'LSU') {
          console.log('here')
          storage.setItem('user', {
            email: this.email,
            role: 'user'
          })
          this.$router.push({
            name: 'UserDashboard'
          })
        } else {
          this.$swal('Login Failed!')
        }
      }).catch((err) => {
        if (err) {
          console.log(err)
          this.$swal('Login Failed!')
        }
      })
    }
  },
  created () {
    if (storage.getItem('user')) {
      const userRole = storage.getItem('user').role
      if (userRole === 'admin') {
        this.$router.push({
          name: 'AdminDashboard'
        })
      } else {
        this.$router.push({
          name: 'UserDashboard'
        })
      }
    }
  }
}
</script>
