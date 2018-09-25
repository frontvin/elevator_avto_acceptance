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
  }
}

export const actions = {
  addNew({
    commit,
    state
  }, car) {
    commit('ADD_CAR', car)
    commit('SET_COUNT', state.list.length)
  }
}