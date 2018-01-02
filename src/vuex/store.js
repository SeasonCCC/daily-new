import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  prevPath: 0
}

const mutations = {
  updatePath (state, nowPath) {
    state.prevPath = nowPath
  }
}

export default new Vuex.Store({
  state,
  mutations
})
