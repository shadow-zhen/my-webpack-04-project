import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

import moduleDemo from './modules/demo'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    moduleDemo
  }
})

export default store
