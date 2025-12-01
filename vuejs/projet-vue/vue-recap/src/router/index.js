import { createRouter, createWebHistory } from 'vue-router'
import Presentation from "@/page/Presentation.vue";
import Home from "@/page/Home.vue";
import ExoRecap from "@/page/ExoRecap.vue";
import Promise from "@/page/Promise.vue";
import Login from "@/page/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Home, meta: { requiresAuth: true }},
    {path: "/presentation", component: Presentation},
    {path: "/exo", component: ExoRecap},
    {path: "/promise", component: Promise},
    {path: "/login", component: Login},
  ],
});

router.beforeEach((to, from, next) =>
{
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token)
  {
    next('/login');
  }
  else
  {
    next();
  }
});

export default router
