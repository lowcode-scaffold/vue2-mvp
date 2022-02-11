import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/formily"
  },
  {
    path: "/demo/composition-api",
    name: "composition-api",
    component: () =>
      import(
        /* webpackChunkName: "composition-api" */ "../views/demo/composition-api/SimpleComponent"
      )
  },
  {
    path: "/formily",
    name: "formily",
    component: () =>
      import(
        /* webpackChunkName: "formily" */ "../views/formily-reactive/userManage/List"
      )
  },
  {
    path: "/mobx",
    name: "mobx",
    component: () =>
      import(/* webpackChunkName: "formily" */ "../views/mobx/userManage/List")
  },
  {
    path: "/vue",
    name: "vue",
    component: () =>
      import(/* webpackChunkName: "formily" */ "../views/vue/userManage/List")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
