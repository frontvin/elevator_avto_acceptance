export const state = () => ({
  list: [],
  count: 0,
  dialogTable: false,
  currentItem: null
})

export const mutations = {
  ADD_CAR(state, payload) {
    state.list.push(payload)
  },
  SET_COUNT(state, count) {
    state.count = count
  },
  DELETE_ITEM(state, index){
    state.list.splice(index, 1)
  },
  SHOW_CAR_DIALOG(state, changeView){
    state.dialogTable = changeView
  },
  CURRENT_CAR_ITEM(state, index){
    if(index >= 0) {
      state.currentItem = state.list[index]
  } else {
      state.currentItem = null
    }
  }
}

export const actions = {
  addNew({commit, state}, car) {
    commit('ADD_CAR', car)
    commit('SET_COUNT', state.list.length)
  },
  removeRowItem({commit, state}, index){
    commit('DELETE_ITEM', index)
    commit('SET_COUNT', state.list.length)
  }
}