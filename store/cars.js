export const state = () => ({
  list: [],
  count: 0,
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