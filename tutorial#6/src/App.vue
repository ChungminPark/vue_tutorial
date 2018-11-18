<template>
  <div id="app">
    Parent counter: {{ getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

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
    ...mapMutations([
      'addCounter',
      'subCounter',
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
