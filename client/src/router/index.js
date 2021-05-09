import Vue from 'vue'
import Router from 'vue-router'

import { Home } from '@/pages'
import { Login, Register } from '@/pages/auth'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})