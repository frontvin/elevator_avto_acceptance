export const state = () => ({ 
  list: [],
  count: 0,
  dialogTable: false,
  currentItem: null
})

export const mutations = { 
  ADD_DRIVER(state, payload){
    state.list.push(payload)
  },
  SET_COUNT(state, count){
    state.count = count
  },
  DELETE_ITEM(state, index){
    state.list.splice(index, 1)
  },
  SHOW_DRIVER_DIALOG(state, changeView){
    state.dialogTable = changeView
  },
  CURRENT_DRIVER_ITEM(state, index){
    if(index >= 0) {
      state.currentItem = state.list[index]
  } else {
      state.currentItem = null
    }
  }
}

export const actions = {
  addNew({commit,state}, driver) {
    commit('ADD_DRIVER', driver)
    commit('SET_COUNT', state.list.length)
  },
  removeRowItem({commit, state}, index){
    commit('DELETE_ITEM', index)
    commit('SET_COUNT', state.list.length)
  }
}