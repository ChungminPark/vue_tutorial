<template>
  <div id="app">
    Parent counter: {{ getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- if you want to send some values -->
    <!-- <button @click="asyncInrement({ by: 50, duration: 500 })">-</button> -->
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getCounter',
    ]),
  },
  methods: {
    /* when you use Actions */
    addCounter() {
      this.$store.dispatch('addCounter');
    },
    subCounter() {
      this.$store.dispatch('subCounter');
    },
    /* when you use Mutation */
    // addCounter() {
    //   this.$store.commit('addCounter');
    // },
    // subCounter() {
    //   this.$store.commit('subCounter');
    // },
  },
  components: {
    'child': Child
  }
}
</script>

<style>
#app {

}
</style>
