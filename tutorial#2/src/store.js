import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // add counter to state
  state: {
    counter: 0
  },
});