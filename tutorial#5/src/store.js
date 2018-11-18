import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // add counter to state
  state: {
    counter: 0,
  },
  getters: {
    getCounter: function (state) {
      return state.counter;
    },
  },
  mutations: {
    addCounter: function (state, payload) {
      return state.counter++;
    },
    subCounter: function (state, payload) {
      return state.counter--;
    },
  }
});