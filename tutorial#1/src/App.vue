<template>
  <div id="app">
    Parent counter: {{ counter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <child v-bind:passedCounter="counter"></child>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'app',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    subCounter() {
      this.counter--;
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
