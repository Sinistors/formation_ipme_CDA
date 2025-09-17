<template>
  <h1>Je suis dans cours component</h1>
  <p>{{ myString }}</p>
  <p :class="{greenText: myNumber >= 50}">Mon nombre : {{ myNumber }}</p>
  <button @click="add20">Ajouter 20</button>
  <p v-if="age >= 18">Je suis majeur</p>
  <p v-else>Je suis mineur</p>
  <ul>
    <li v-for="(item, index) in arrayName" :key="index">{{ item }}</li>
  </ul>
  <input v-model="inputText">
  <p>{{ inputText }}</p>
</template>
<script>
export default {
  name: 'CoursVariable',
  data(){
    return {
      myString: 'Bonjour !',
      myNumber: 10,
      age: 20,
      arrayName: [
        "Jules", "Victor", "Radia", "Nicolas"
      ],
      inputText: ""
    }
  },
  methods : {
    add20()
    {
      this.myNumber += 20;
    }
  }
}
</script>
<style scoped>
  .greenText{
    color: green;
  }
</style>
