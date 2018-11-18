<template>
  <div id="app">
    Parent counter: {{ this.$store.state.counter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- <child v-bind:passedCounter="counter"></child> -->
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'app',
  // data () {
  //   return {
  //     counter: 0
  //   }
  // },
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
