<template>
  <router-link to="/">Home</router-link>
  <router-link to="/presentation">Presentation</router-link>
  <router-link to="/exo">Exo</router-link>
  <router-link to="/promise">Promise</router-link>
  <router-link to="/login">Login</router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBar"
})
</script>
<style scoped>

</style>