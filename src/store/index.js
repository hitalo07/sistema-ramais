import Vue from 'vue'
import Vuex from 'vuex'

import ramal from './ramal'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ramal
  }
})

export default store
