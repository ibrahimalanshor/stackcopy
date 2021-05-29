import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { Home } from '@/pages'
import { Login, Register } from '@/pages/auth'
import { guest, checkauth, checknotif } from './guards'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: { guest: true }
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
    meta: { guest: true }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(checkauth)
router.beforeEach(checknotif)
router.beforeEach(guest)

export default router