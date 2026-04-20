import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/presentation/pages/HomePage/HomePage.vue"),
    },
    {
      path: "/catalogo/:category",
      name: "catalog",
      component: () => import("@/presentation/pages/CatalogPage/CatalogPage.vue"),
    },
    {
      path: "/producto/:id",
      name: "product",
      component: () => import("@/presentation/pages/ProductPage/ProductPage.vue"),
      props: true,
    },
    {
      path: "/carrito",
      name: "cart",
      component: () => import("@/presentation/pages/CartPage/CartPage.vue"),
    },
  ],
});

export default router;
