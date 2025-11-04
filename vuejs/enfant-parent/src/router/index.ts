import { createRouter, createWebHistory } from 'vue-router'
import MovieList from "@/page/MovieList.vue";
import CardList from "@/page/CardList.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{path: "/movielist", component: MovieList },
          {path: "/cardlist", component: CardList },],
})

export default router
