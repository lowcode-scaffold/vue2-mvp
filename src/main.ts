import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import { Modal } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(Modal);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
