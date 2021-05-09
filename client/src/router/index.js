import Vue from 'vue'
import Router from 'vue-router'

import { Home } from '@/pages'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})