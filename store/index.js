import Vue from 'vue'
import Vuex from 'vuex'
import registersStore from './registersStore'
import driversStore from './driversStore'
import carsStore from './carsStore'

Vue.use(Vuex)

const store = () =>{
  return new Vuex.Store({
    modules: {
      registersStore,
      driversStore,
      carsStore
    }
  })
} 

export default store