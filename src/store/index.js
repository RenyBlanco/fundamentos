import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 50
  },
  getters: {
  },
  mutations: {
    inc(state) {
      state.contador = state.contador +1
    },
    dec(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: {
  },
  modules: {
  }
})
