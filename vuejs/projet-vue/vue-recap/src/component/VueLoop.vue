
<template>
  <div v-for="(item, index) in array">
    <span class="b-name" v-if="item !== 'Fairouz'">{{ item }}</span>
  </div>

  <template v-for="(item, index) in array">
    <div v-if="item !== 'Fairouz'" class="b-name">
      <span>{{ item }}</span>
    </div>
  </template>

  <template v-for="(item, index) in array2">
    <p>Je m'appelle {{ item.name }}, je suis de couleur {{ item.couleur }} et mon propriétaire est {{ item.owner.fullName }}.</p>
  </template>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VueLoop",
  data(){
    return{
      array: ["Mathieu", "Fairouz", "Alexandre"],
      array2: [
        {name: "Milou", couleur: "blanc", owner: {fullName: "Jules"}},
        {name: "Rantaplan", couleur: "blanc", owner: {fullName: "Lucky luke"}},
        {name: "Garfield", couleur: "blanc", owner: {fullName: "Toto"}},
      ]
    }
  }
})
</script>


<style scoped>
.b-name{
  border: solid black;
  padding: 1rem;
}
</style>