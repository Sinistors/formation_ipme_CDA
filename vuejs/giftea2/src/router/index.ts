import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/page/Login.vue";
import Dashboard from "@/page/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard }
  ],
})

export default router
