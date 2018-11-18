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
    asyncIncrement: function (state, payload) {
      return state.counter++;
    },
    asyncDecrement: function (state, payload) {
      return state.counter--;
    },
  },
  actions: {
    asyncIncrement: function (context) {
      // addCounter means mutations' method which is a subject to commit
      return context.commit('asyncIncrement');
    },
    asyncDecrement: function (context) {
      // addCounter means mutations' method which is a subject to commit
      return context.commit('asyncDecrement');
    },
    /* if you want to send some values and get them */
    // asyncIncrement: function (context, payload) {
    //   return setTimeout(function() {
    //     context.commit('increment', payload.by);
    //   }, payload.duration);
    // }
  }
});