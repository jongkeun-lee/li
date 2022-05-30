import { createWebHistory, createRouter } from "vue-router";
import Error404 from "./components/Error404.vue";
import Intro from "./components/Intro.vue";
import Index from "./components/Index.vue";

const routes = [
  {
    path: "/",
    component: Intro,
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/:anythig(.*)",
    component: Error404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;