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
  }
}

export const actions = {
  addNew({commit,state}, driver) {
    commit('ADD_DRIVER', driver)
    commit('SET_COUNT', state.list.length)
  }
}