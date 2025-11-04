<template>
  <img :src="imgPath">
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MovieImage",
  props: {
    imgPath: String
  }
})
</script>
<style scoped>
  img{
    border-radius: 1rem;
  }
</style>