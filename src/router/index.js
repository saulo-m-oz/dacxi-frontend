import { createRouter, createWebHistory } from "vue-router";

// VIEWS
import HomeView from "../views/HomeView.vue";
import AllCryptosView from "@/views/coins/AllCryptosView.vue";
import DetailedCryptoView from "@/views/coins/DetailedCryptoView.vue";

// COMPONENTS
import NotFound from "@/components/NotFound.vue";
import CoinDetail from "@/components/CoinDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/explore",
      name: "explore",
      component: AllCryptosView,
    },
    {
      path: "/coins/:id/",
      component: DetailedCryptoView,
      children: [
        {
          path: "",
          name: "detailed",
          component: CoinDetail,
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
