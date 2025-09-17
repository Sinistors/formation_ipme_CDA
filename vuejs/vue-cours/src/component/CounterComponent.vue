<template>
  <h1 :class="{greenText :number > 0, redText :number < 0, blackText :number === 0}">{{ number }}</h1>
  <p v-if="number >= 0">Le compteur est en positif</p>
  <p v-else>Le compteur est en négatif</p>
  <button @click="addToCounter(1)">+1</button>
  <button @click="addToCounter(5)">+5</button>
  <button @click="addToCounter(-1)">-1</button>
  <button @click="addToCounter(-5)">-5</button>
</template>
<script>
export default {
  name: 'CounterComponent',
  data()
  {
    return {
      number: 0,
    }
  },
  methods : {
    addToCounter(addNumber)
    {
      this.number += addNumber;
    }
  }
}
</script>
<style scoped>
.greenText{
  color: green;
}
.blackText{
  color: black;
}
.redText{
  color: red;
}
</style>
