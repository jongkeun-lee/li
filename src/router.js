import { createWebHistory, createRouter } from "vue-router";
import Error404 from "./components/Error404.vue";
import Intro from "./components/Intro.vue";
import Index from "./components/Index.vue";
import Overview from "./components/Overview.vue";
import Contact from "./components/Contact.vue";

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
    path: "/overview",
    component: Overview,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/:anythig(.*)",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
