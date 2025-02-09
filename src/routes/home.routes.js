export const homeRoutes = [
  {
    path: "/home",
    name: "home",
    component: () => import("/src/view/HomeView.vue"),
  },
];
