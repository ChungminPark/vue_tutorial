<template>
  <div id="app">
    Parent counter: {{ parentCounter }} <br>
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
  computed: {
    parentCounter() {
      return this.$store.getters.getCounter;
    }
  },
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
