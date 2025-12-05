<template>
  <h1>Page de presentation</h1>
  <button @click="addUser">ui</button>
  <h2>Les conditions :</h2>
  <VueIf></VueIf>
  <h2>Les boucles :</h2>
  <VueLoop></VueLoop>
  <h2>Event et classes :</h2>
  <VueEventAndClass></VueEventAndClass>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VueIf from "@/component/VueIf.vue";
import VueLoop from "@/component/VueLoop.vue";
import VueEventAndClass from "@/component/VueEventAndClass.vue";
import defaultStore from "@/store/defaultStore";

export default defineComponent({
  name: "Presentation",
  components: {VueEventAndClass, VueLoop, VueIf},
  methods: {
    addUser() {
      console.log(defaultStore.arrayTest);
      defaultStore.arrayTest.push({ name: "ui", lastName: "last"});
    }
  }
})
</script>

<style scoped>

</style>