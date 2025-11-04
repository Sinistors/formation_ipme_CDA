<template>
  <h1>Exercice 1 – Galerie d’images filtrable</h1>

  <select v-model="categorieSelectionnee">
    <option value="nature">Nature</option>
    <option value="animaux">Animaux</option>
    <option value="ville">Ville</option>
  </select>

  <div class="image-container">
    <template v-for="(item, index) in images">
      <img
          :src="item.url"
          v-if="categorieSelectionnee === item.categorie"
          :class="{active: item.active}"
          @click="item.active = !item.active"
      >
    </template>
  </div>

  <h1>Exercice 2 – Menu interactif</h1>

  <label for="availabilityCheck">Afficher disponibles</label>
  <input id="availabilityCheck" type="checkbox" v-model="afficherDisponibles">

  <ul>
    <template v-for="(item, index) in plats">
      <li
          :class="{ notAvailable: !item.disponible}"
          v-if="!(afficherDisponibles && !item.disponible)"
      >
        {{ item.nom }} -
        <span :class="{red: item.prix >= 8, green: item.prix < 8}">
          {{ item.prix }}€
        </span>
      </li>
    </template>
  </ul>

  <h1>Exercice 3 – Questions à choix multiples</h1>

  <template v-for="(item, index) in questions">
    <h2>{{ item.question}}</h2>
    <select v-model="item.reponseChoisie" :class="{green: item.reponseChoisie === item.bonneReponse}">
      <template v-for="option in item.options" >
        <option :value="option" >{{ option }}</option>
      </template>
    </select>
    <p class="green" v-if="item.reponseChoisie === item.bonneReponse">Correct !</p>
    <p class="red" v-else> Essayez encore !</p>
  </template>

  <h1>Exercice 4 – Tableau météo interactif</h1>

  <label for="filter">Filtre</label>
  <select v-model="filtreCondition">
    <option value="soleil">Soleil</option>
    <option value="nuageux">Nuageux</option>
    <option value="pluie">Pluie</option>
    <option value="neige">Neige</option>
  </select>
  <ul>
    <template v-for="(item, index) in villes">
      <li
          v-if="filtreCondition == '' || filtreCondition == item.condition"
          :class="item.condition"
          @click="item.condition = randomCondition()"
      >
        {{ item.nom }}: {{ item.condition }}
      </li>
    </template>
  </ul>
  <p>Ville la plus chaude : {{ getWarmestCity().nom }}</p>
  <p>Ville la plus froide : {{ getColdestCity().nom }}</p>


</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ExoRecap",
  data() {
    return {
      images: [
        { url: 'https://picsum.photos/200/150?random=1', categorie: 'nature', active: true },
        { url: 'https://picsum.photos/200/150?random=2', categorie: 'animaux', active: true },
        { url: 'https://picsum.photos/200/150?random=3', categorie: 'ville', active: false },
        { url: 'https://picsum.photos/200/150?random=4', categorie: 'nature', active: true },
        { url: 'https://picsum.photos/200/150?random=5', categorie: 'animaux', active: false }
      ],
      categorieSelectionnee: 'nature',
      plats: [
        { nom: 'Pizza Margherita', prix: 8, disponible: true },
        { nom: 'Burger', prix: 6, disponible: false },
        { nom: 'Salade César', prix: 7, disponible: true },
        { nom: 'Pâtes Carbonara', prix: 9, disponible: true },
        { nom: 'Sushi', prix: 12, disponible: false }
      ],
      afficherDisponibles: false,
      questions: [
        {
          question: 'Quelle est la capitale de la France ?',
          options: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
          bonneReponse: 'Paris',
          reponseChoisie: null
        },
        {
          question: 'Quelle planète est la plus proche du Soleil ?',
          options: ['Terre', 'Mercure', 'Mars', 'Venus'],
          bonneReponse: 'Mercure',
          reponseChoisie: null
        },
        {
          question: 'Combien de continents y a-t-il sur Terre ?',
          options: ['5', '6', '7', '8'],
          bonneReponse: '7',
          reponseChoisie: null
        }
      ],
      villes: [
        { nom: 'Paris', temperature: 18, condition: 'soleil' },
        { nom: 'New York', temperature: 22, condition: 'pluie' },
        { nom: 'Tokyo', temperature: 25, condition: 'nuageux' },
        { nom: 'Sydney', temperature: 30, condition: 'soleil' },
        { nom: 'Moscou', temperature: 10, condition: 'neige' }
      ],
      filtreCondition: ''
    }
  },
  methods: {
    randomCondition()
    {
      let random: number = Math.floor(Math.random() * 4);

      if (random == 0)
      {
        return "soleil";
      }
      else if (random == 1)
      {
        return "pluie";
      }
      else if (random == 2)
      {
        return "nuageux";
      }
      else if (random == 3)
      {
        return "neige";
      }
    },
    getColdestCity()
    {
      let coldest = this.villes[0];
      for (const city of this.villes)
      {
        if (coldest.temperature > city.temperature)
        {
          coldest = city;
        }
      }
      return coldest;
    },
    getWarmestCity()
    {
      let warmest = this.villes[0];
      for (const city of this.villes)
      {
        if (warmest.temperature < city.temperature)
        {
          warmest = city;
        }
      }
      return warmest;
    }
  }
})
</script>


<style scoped>
  .image-container{
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .active{
    border: 5px solid green;
  }
  .notAvailable{
    color: grey;
  }
  .red{
    color: red;
  }
  .green{
    color: green;
  }
  .neige{
    border: 2px solid lightblue;
  }
  .nuageux{
    border: 2px solid grey;
  }
  .soleil{
    border: 2px solid yellow;
  }
  .pluie{
    border: 2px solid blue;
  }
</style>