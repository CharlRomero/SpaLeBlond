import { createRouter, createWebHashHistory } from "vue-router";

import { homeRoutes } from "./home.routes.js";

const routes = [...homeRoutes, { path: "/", redirect: "/home" }];

const router = createRouter({
  history: createWebHashHistory(), // Usa hash mode para navegación anclada
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
