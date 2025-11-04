<template>
  <div class="movieCard">
    <MovieImage :img-path="imgPath"></MovieImage>
    <MovieInfo :title="title" :from="from"></MovieInfo>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import MovieImage from "@/component/movie/MovieImage.vue";
import MovieInfo from "@/component/movie/MovieInfo.vue";

export default defineComponent({
  name: "Movie",
  components: {MovieInfo, MovieImage},
  props: {
    imgPath: String,
    title: String,
    from: String
  }
})
</script>
<style scoped>
  .movieCard{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>