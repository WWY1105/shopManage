import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import distribution from './modules/distribution'
import meta from './modules/meta'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    meta,
    distribution,
    user
  },
  getters
})

export default store
