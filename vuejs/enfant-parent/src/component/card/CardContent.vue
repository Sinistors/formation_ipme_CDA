<template>
  <div class="cardContent">
    <CardTag :tag="tag"></CardTag>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CardTag from "@/component/card/CardTag.vue";

export default defineComponent({
  name: "CardContent",
  components: {CardTag},
  props: {
    title: String,
    tag: String,
    description: String,
  }
})
</script>

<style scoped>
  .cardContent{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  h2{
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
</style>