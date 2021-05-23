import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import mutations from './mutations'

import question from './question'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations,
  modules: {
    question
  }
})