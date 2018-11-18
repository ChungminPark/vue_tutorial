<template>
  <div id="app">
    Parent counter: {{ getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- <child v-bind:passedCounter="counter"></child> -->
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  /* if you want to use mapGetters and another one together in computed */
  computed: {
      ...mapGetters([
      'getCounter'
    ]),
    anotherCounter() {
      // ...
    },
  },
  /* if you want to use mapGetters only in computed */
  // computed: mapGetters({
  //   getCounter: 'getCounter'
  // }),
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
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
