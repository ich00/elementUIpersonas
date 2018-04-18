import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import blog from './modules/blogs'
import post from './modules/posts'
import persona from './modules/personas'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    blog,
    post,
    persona
  }
})
