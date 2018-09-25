export const state = () => ({
  list: [],
  count: 0,
  newRegistrationFormVisible: false
})

export const mutations = {
  ADD_REGISTARTION(state, payload) {
    state.list.push(payload)
  },
  SET_COUNT(state, count) {
    state.count = count
  },
  SET_REGISTRATION_FORM_VISIBLE(state, visible) {
    state.newRegistrationFormVisible = visible
  }
}

export const actions = {
  addNew({
    commit,
    state
  }, registration) {
    commit('ADD_REGISTARTION', registration)
    commit('SET_COUNT', state.list.length)
  }
}