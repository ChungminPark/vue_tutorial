<template>
  <div>
    <hr>
    Child counter: {{ getCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCounter'
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
}
</script>
