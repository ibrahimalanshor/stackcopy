import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import mutations from './mutations'
import getters from './getters'

import question from './question'
import auth from './auth'
import tag from './tag'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters,
  mutations,
  modules: {
    question,
    auth,
    tag,
  }
})