<template>
  <h2>{{ title }}</h2>
  <p>From {{ from }}</p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MovieInfo",
  props: {
    title: String,
    from: String
  }
})
</script>

<style scoped>
  h2{
    margin: 0;
  }
  p{
    margin: 0;
    color: grey;
    font-style: italic;
  }
</style>