<template>
  <div class="tab-header">
    <h1>Mon profil</h1>
    <p>Gère tes infos personnelles et paramètres</p>
  </div>
  <article class="container">
    <h2>Statistiques</h2>
    <ul class="list">
      <li class="rowBetween">
        <span>Idée ajoutées</span>
        <span class="pink">{{  }}</span>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
})
</script>

<style scoped>

</style>
