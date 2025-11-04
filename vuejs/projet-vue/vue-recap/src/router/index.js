import { createRouter, createWebHistory } from 'vue-router'
import Presentation from "@/page/Presentation.vue";
import Home from "@/page/Home.vue";
import ExoRecap from "@/page/ExoRecap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home},
    {path: "/presentation", component: Presentation},
    {path: "/exo", component: ExoRecap}
  ],
})

export default router
