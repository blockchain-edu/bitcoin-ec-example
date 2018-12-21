import Vue from "vue";
import Router from "vue-router";
import GoodsPage from "./views/GoodsPage.vue";
import QRPage from "./views/QRPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/goods",
      name: "goods",
      component: GoodsPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
  ],
});
