import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/presentation/pages/HomePage/HomePage.vue"),
    },
    {
      path: "/producto/:id",
      name: "product",
      component: () => import("@/presentation/pages/ProductPage/ProductPage.vue"),
      props: true,
    },
  ],
});

export default router;
