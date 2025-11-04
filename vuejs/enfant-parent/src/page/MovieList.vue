<template>
  <h1>Bonjour</h1>
  <div class="movieList">
    <Movie
        v-for="movie in movies"
        :title="movie.title"
        :img-path="movie.imgPath"
        :from="movie.from"
    >
    </Movie>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Movie from "@/component/movie/Movie.vue";

export default defineComponent({
  name: "MovieList",
  components: {Movie},
  data() {
    return {
      movies: [
        { imgPath: "/1.webp", title: "La guerre des roses", from: "Jay Roach"},
        { imgPath: "/2.jpg", title: "Prix au piège", from: "Darren Aronofsky"},
      ]
    }
  }
})
</script>

<style scoped>
  .movieList{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>