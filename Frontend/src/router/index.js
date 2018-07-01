import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AdminDashboard from '@/components/admin/Dashboard/AdminDashboard'
import UserDashboard from '@/components/client/Dashboard/UserDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin-dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/user-dashboard',
      name: 'UserDashboard',
      component: UserDashboard
    }
  ]
})
