import axios from 'axios'

const REQUEST_PEOPLE_SUCCESS = 'REQUEST_PEOPLE'

const state = {
  data: []
}

const mutations = {
  [REQUEST_PEOPLE_SUCCESS] (state, data) {
    state.data = data
  }
}

const actions = {
  fetchPeople ({ commit }) {
    return axios.get('/api/person/all/json').then(res => commit(REQUEST_PEOPLE_SUCCESS, res.data))
  }
}

export default {
  state,
  mutations,
  actions
}
