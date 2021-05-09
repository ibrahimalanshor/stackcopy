import Vue from 'vue'
import App from './App.vue'

import './assets/app.css'

import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
