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
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
      ...mapGetters([
      'getCounter',
    ]),
  },
  methods: {
    addCounter() {
      this.$store.commit('addCounter');
    },
    subCounter() {
      this.$store.commit('subCounter');
      /* if you want to send some values */
      // this.$store.commit('addCounter', 10);
      // this.$store.commit('addCounter', {
      //   value: 10,
      //   arr: ["a", "b", "c"]
      // });
    },
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
