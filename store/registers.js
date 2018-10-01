export const state = () => ({
  list: [],
  count: 0,
  newRegistrationFormVisible: false,
  dialogTable: false,
  currentItem: null
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
  SHOW_DIALOG(state, changeView){
    state.dialogTable = changeView
  },
  DELETE_ITEM(state, index){
    state.list.splice(index, 1)
  },
  CURRENT_ITEM(state, index){
      if(index >= 0) {
        state.currentItem = state.list[index]
    } else {
        state.currentItem = null
    }
  }
}

export const actions = {
  addNew({commit, state}, registration) {
    commit('ADD_REGISTARTION', registration)
    commit('SET_COUNT', state.list.length)
  },
  removeRowItem({commit, state}, index){
    commit('DELETE_ITEM', index)
    commit('SET_COUNT', state.list.length)
  }
}