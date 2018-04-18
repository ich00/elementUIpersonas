import trabajosApi from '../../trabajos'
import * as mutationType from '../mutation_types'
// import router from '../../router'

const state = {
  all: [],
  messageTrabajo: null,
  finish: false
}
// initial getters
const getters = {
  allTrabajos: state => state.all,
  messageTrabajo: state => state.messageTrabajo,
  finish: state => state.finish
 // objectPersona: state => state.object
}

const actions = {
  // get data from API
  getAllTrabajos ({commit}) {
    state.finish = false
    trabajosApi.getTrabajos(trabajos => {
      state.finish = true
      commit(mutationType.SHOW_ALL_TRABAJOS, trabajos)
    })
  }
}
// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_TRABAJO] (state, trabajos) {
    state.all = trabajos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
