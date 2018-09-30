export const state = () => ({ 
  list: [],
  count: 0
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