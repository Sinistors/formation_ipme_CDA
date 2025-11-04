<template>
  <div class="tag" :class="tag">{{ tag }}</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardTag",
  props: {
    tag: String,
  },
})
</script>

<style scoped>
  .tag{
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: fit-content;
  }
  .Technology{
    background-color: green;
  }
  .Automobile{
    background-color: red;
  }
  .Food{
    background-color: blue;
  }
</style>