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
  },
  DELETE_ITEM(state){

  }
}

export const actions = {
  addNew({commit, state}, registration) {
    commit('ADD_REGISTARTION', registration)
    commit('SET_COUNT', state.list.length)
  },
  removeRowItem({commit, state}, registration){
    commit('DELETE_ITEM', )
    commit('SET_COUNT', state.list.length-1)
  }
}