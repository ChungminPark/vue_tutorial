<template>
  <div>
    <hr>
    Child counter: {{ getCounter }} <br>
    <button @click="asyncIncrement">+</button>
    <button @click="asyncDecrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCounter'
    ]),
  },
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
  },
}
</script>
