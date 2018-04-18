import postsApi from '../../api/posts'
import * as mutationType from '../mutation_types'

// initial state
const state = {
  all: [],
  message: null
}

// initial getters
const getters = {
  allPosts: state => {
    return state.all.sort((a, b) => {
      return a['id'] < b['id']
    })
  },
  messages: state => state.message
}

// initial actions
const actions = {
  // get data from API
  getAllPosts ({commit}) {
    postsApi.getPosts(posts => {
      commit(mutationType.SHOW_ALL_BLOG, posts)
    })
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_BLOG] (state, blogs) {
    state.all = blogs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
