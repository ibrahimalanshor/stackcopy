import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import { Home, Read, Create } from '@/pages'
import { Login, Register } from '@/pages/auth'
import { guest, auth, checkauth, checknotif } from './guards'

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
    name: 'New',
    path: '/new',
    component: Create,
    meta: { auth: true }
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
    meta: { guest: true }
  },
  {
    name: 'Read',
    path: '/:user/:question',
    component: Read
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(checkauth)
router.beforeEach(checknotif)
router.beforeEach(guest)
router.beforeEach(auth)

export default router