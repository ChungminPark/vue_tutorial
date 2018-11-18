<template>
  <div id="app">
    Parent counter: {{ getCounter }} <br>
    <button @click="asyncIncrement">+</button>
    <button @click="asyncDecrement">-</button>
    <!-- if you want to send some values -->
    <!-- <button @click="asyncInrement({ by: 50, duration: 500 })">-</button> -->
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getCounter',
    ]),
  },
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
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
