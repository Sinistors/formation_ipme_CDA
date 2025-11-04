<template>
  <p :class="{positive: isPositive()}">Valeur du compteur : {{ countValue }}</p>

  <button @click="addToCount(1)">+1</button>
  <button @click="addToCount(-1)">-1</button>

  <div>
    <input type="text" v-model="modelInput" @input="handleInput">
    <p>{{ modelInput }}</p>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VueEventAndClass",
  data(){
    return{
      countValue: 0,
      modelInput: "ipme"
    }
  },
  methods: {
    addToCount(num : number)
    {
      this.countValue += num;
    },
    isPositive()
    {
      return this.countValue > 0;
    },
    handleInput(){
      if (this.modelInput.length > 15)
      {
        alert("Attention !");
      }
    }
  }
})
</script>

<style scoped>
.positive{
  color: green;
}

</style>