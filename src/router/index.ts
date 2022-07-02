import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/test"
  },
  //   {
  //     path: "/formily",
  //     name: "formily",
  //     component: () =>
  //       import(
  //         /* webpackChunkName: "formily" */ "../views/formily-reactive/userManage/List"
  //       )
  //   },
  //   {
  //     path: "/mobx",
  //     name: "mobx",
  //     component: () =>
  //       import(/* webpackChunkName: "mobx" */ "../views/mobx/userManage/List")
  //   },
  {
    path: "/vue",
    name: "vue",
    component: () =>
      import(/* webpackChunkName: "vue" */ "../views/vue/userManage/List")
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "vue" */ "../views/2.7-test")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
