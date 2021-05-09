import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App.vue'

import './assets/app.css'

import store from './store'
import router from './router'

const options = {
  color: '#60A5FA',
  failedColor: '#EF4444',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
