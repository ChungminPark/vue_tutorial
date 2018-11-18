<template>
  <div>
    <hr>
    Child counter: {{ passedCounter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  props: ['passedCounter']
}
</script>
