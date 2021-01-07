import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import distribution from './modules/distribution'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    distribution,
    user
  },
  getters
})

export default store
