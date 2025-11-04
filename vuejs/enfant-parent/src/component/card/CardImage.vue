<template>
  <img :src="imgPath">
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardImage",
  props: {
    imgPath: String
  }
})
</script>

<style scoped>
 img{
   border-radius: 1rem 1rem 0 0;
 }
</style>